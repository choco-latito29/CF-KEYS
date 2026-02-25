import { Command } from "commander";
import { generate } from "youtube-po-token-generator";

/**
 * Core logic to generate YouTube tokens.
 * Essential for bypass systems in Music Bots like Kiwi Chan.
 */
export const getYoutubeTokens = async () => {
  return await generate();
};

export const youtubeCmd = new Command("youtube")
  .description("Generate a valid token and visitor data from YouTube.")
  .action(async () => {
    try {
      const tokens = await getYoutubeTokens();

      console.info(
        JSON.stringify(
          {
            type: "youtube_tokens",
            visitorData: tokens.visitorData,
            poToken: tokens.poToken,
            timestamp: new Date().toISOString(),
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
            message: "Failed to generate YouTube tokens.",
            details: error.message,
          },
          null,
          2,
        ),
      );
    }
  });
