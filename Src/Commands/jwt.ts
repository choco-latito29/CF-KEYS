import { Command } from "commander";
import jwt, { SignOptions } from "jsonwebtoken";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";

/**
 * Core logic to sign JWT tokens.
 */
export const signJWT = (
  payload: object,
  secret: string,
  expires: string = "24h",
): string => {
  const options: SignOptions = {
    expiresIn: expires as SignOptions["expiresIn"],
  };
  return jwt.sign(payload, secret, options);
};

const askQuestion = (query: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    }),
  );
};

export const jwtCmd = new Command("jwt")
  .description("Generate and sign a JSON Web Token (JWT)")
  .option("-p, --payload <json>", "Token payload in JSON string format")
  .option("-f, --file <path>", "Path to a .json file containing the payload")
  .option(
    "-a, --args <pairs...>",
    "Key-value pairs (e.g., user=admin role=dev)",
  )
  .option("-s, --secret <key>", "Secret key to sign") // Cambiado a .option para manejar flujo manual
  .option("-e, --expires <time>", 'Expiration time (e.g., "1h", "7d")', "24h")
  .action(async (options) => {
    try {
      let payloadObj: any = {};
      let secret = options.secret;

      if (
        !options.payload &&
        !options.file &&
        !options.args &&
        !options.secret
      ) {
        console.log("🛠️  Interactive JWT Signing Mode");
        const rawPayload = await askQuestion(
          'Enter JSON payload (e.g. {"id":1}): ',
        );
        payloadObj = JSON.parse(rawPayload);
        secret = await askQuestion("Enter secret key: ");
        if (!secret) throw new Error("Secret is required");
      } else {
        if (!secret)
          throw new Error("Required option '-s, --secret <key>' not specified");

        if (options.file) {
          const filePath = path.resolve(options.file);
          if (!fs.existsSync(filePath))
            throw new Error(`File not found: ${filePath}`);
          payloadObj = JSON.parse(fs.readFileSync(filePath, "utf8"));
        } else if (options.payload) {
          payloadObj = JSON.parse(options.payload);
        } else if (options.args) {
          options.args.forEach((pair: string) => {
            const [key, value] = pair.split("=");
            if (key && value) {
              if (value === "true") payloadObj[key] = true;
              else if (value === "false") payloadObj[key] = false;
              else if (!isNaN(Number(value))) payloadObj[key] = Number(value);
              else payloadObj[key] = value;
            }
          });
        } else {
          throw new Error("You must provide a payload using -p, -f, or -a");
        }
      }

      const token = signJWT(payloadObj, secret, options.expires);

      console.info(
        JSON.stringify(
          {
            status: "success",
            type: "jwt",
            token,
            expiresIn: options.expires,
            decodedPayload: payloadObj,
          },
          null,
          2,
        ),
      );
    } catch (error: any) {
      console.error(
        JSON.stringify(
          {
            status: "error",
            message: "Error in JWT generation",
            details: error.message,
          },
          null,
          2,
        ),
      );
    }
  });
