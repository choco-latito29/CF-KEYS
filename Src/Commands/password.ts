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

/**
 * CLI Command definition for password generation.
 * Supports: cf-keys password [length] OR cf-keys password -l [length]
 */
export const passwordCmd = new Command("password")
  .description("Generates a cryptographically secure password")
  .argument("[length]", "Password length (default: 16)")
  .option("-l, --length <number>", "Password length (alternative option)")
  .option("--no-symbols", "Exclude special characters")
  .option("--no-numbers", "Exclude numbers")
  .action((argLength, options) => {
    try {
      const rawLength = argLength || options.length || "16";
      const length = parseInt(rawLength, 10);

      if (isNaN(length) || length <= 0) {
        throw new Error("Invalid length. Please provide a positive number.");
      }

      const useNumbers = options.numbers !== false;
      const useSymbols = options.symbols !== false;

      const password = generateSecurePassword(length, useNumbers, useSymbols);

      console.info(
        JSON.stringify(
          {
            status: "success",
            type: "password",
            value: password,
            length: length,
            config: {
              symbols: useSymbols,
              numbers: useNumbers,
            },
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
            message: "Failed to generate password",
            details: error.message,
          },
          null,
          2,
        ),
      );
    }
  });
