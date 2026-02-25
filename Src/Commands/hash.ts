import { Command } from "commander";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

/**
 * Core logic for generating hashes.
 * Can be imported directly into other projects.
 */
export const generateHash = (
  data: string | Buffer,
  algo: string = "sha256",
): string => {
  return crypto.createHash(algo).update(data).digest("hex");
};

export const hashCmd = new Command("hash")
  .description("Generate a cryptographic hash for text or files")
  .argument("<data>", "The text or file path to hash")
  .option(
    "-a, --algo <algorithm>",
    "Hash algorithm (sha256, sha512, md5)",
    "sha256",
  )
  .option("-f, --file", "Treat data as a file path")
  .action((data, options) => {
    try {
      let content: string | Buffer = data;

      if (options.file) {
        const filePath = path.resolve(data);
        if (!fs.existsSync(filePath)) throw new Error("File not found");
        content = fs.readFileSync(filePath);
      }

      const hash = generateHash(content, options.algo);

      console.info(
        JSON.stringify(
          {
            type: "hash",
            algorithm: options.algo,
            input: options.file ? "file" : "text",
            result: hash,
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
