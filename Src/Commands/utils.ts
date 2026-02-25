import { Command } from "commander";

/**
 * Core logic for encoding data.
 * Useful for Cloudflare API integrations or bot metadata.
 */
export const encodeData = (text: string, isUrl: boolean = false): string => {
  return isUrl
    ? encodeURIComponent(text)
    : Buffer.from(text).toString("base64");
};

/**
 * Core logic for decoding data.
 */
export const decodeData = (data: string, isUrl: boolean = false): string => {
  return isUrl
    ? decodeURIComponent(data)
    : Buffer.from(data, "base64").toString("utf8");
};

export const utilsCmd = new Command("utils").description(
  "Data encoding and decoding utilities",
);

utilsCmd
  .command("encode")
  .description("Encode text to Base64 or URL format")
  .argument("<text>", "Text to encode")
  .option("-u, --url", "Use URL encoding instead of Base64")
  .action((text, options) => {
    const result = encodeData(text, options.url);
    console.log(JSON.stringify({ action: "encode", result }, null, 2));
  });

utilsCmd
  .command("decode")
  .description("Decode Base64 or URL formatted text")
  .argument("<data>", "Data to decode")
  .option("-u, --url", "Use URL decoding instead of Base64")
  .action((data, options) => {
    try {
      const result = decodeData(data, options.url);
      console.log(JSON.stringify({ action: "decode", result }, null, 2));
    } catch (error: any) {
      console.error(
        JSON.stringify({ status: "error", details: "Invalid input" }, null, 2),
      );
    }
  });
