import { Command } from "commander";
import crypto from "node:crypto";

/**
 * Core logic for secure password generation.
 * This can be imported by your Discord bots or backend services.
 */
export const generateSecurePassword = (
  length: number = 16,
  includeNumbers: boolean = true,
  includeSymbols: boolean = true,
): string => {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) charset += "0123456789";
  if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length);
    password += charset[randomIndex];
  }
  return password;
};

export const passwordCmd = new Command("password")
  .description("Generates a cryptographically secure password")
  .option("-l, --length <numero>", "Password length", "16")
  .option("--no-symbols", "Exclude special characters")
  .option("--no-numbers", "Exclude numbers")
  .action((options) => {
    try {
      const length = parseInt(options.length, 10);

      const password = generateSecurePassword(
        length,
        options.numbers,
        options.symbols,
      );

      console.info(
        JSON.stringify(
          {
            type: "password",
            value: password,
            length: length,
            config: {
              symbols: options.symbols,
              numbers: options.numbers,
            },
          },
          null,
          2,
        ),
      );
    } catch (error: any) {
      console.error(
        JSON.stringify({ status: "error", details: error.message }, null, 2),
      );
    }
  });
