import { Command } from "commander";
import jwt, { SignOptions } from "jsonwebtoken";
import fs from "node:fs";
import path from "node:path";

/**
 * Core logic to sign JWT tokens.
 * Can be imported directly into other projects for bot authentication.
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

export const jwtCmd = new Command("jwt")
  .description("Generate and sign a JSON Web Token (JWT)")
  .option("-p, --payload <json>", "Token payload in JSON string format")
  .option("-f, --file <path>", "Path to a .json file containing the payload")
  .option(
    "-a, --args <pairs...>",
    "Key-value pairs (e.g., user=admin role=dev)",
  )
  .requiredOption("-s, --secret <key>", "Secret key to sign")
  .option("-e, --expires <time>", 'Expiration time (e.g., "1h", "7d")', "24h")
  .action((options) => {
    try {
      let payloadObj: any = {};

      if (options.file) {
        const filePath = path.resolve(options.file);
        if (!fs.existsSync(filePath)) {
          throw new Error(`The file does not exist at: ${filePath}`);
        }
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

      const token = signJWT(payloadObj, options.secret, options.expires);

      console.info(
        JSON.stringify(
          {
            type: "jwt",
            token,
            source: options.args ? "args" : options.file ? "file" : "payload",
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
