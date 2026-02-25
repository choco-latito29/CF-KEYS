#!/usr/bin/env node

import { Command } from "commander";
import { passwordCmd } from "./Commands/password";
import { youtubeCmd } from "./Commands/youtube";
import { jwtCmd } from "./Commands/jwt";
import { hashCmd } from "./Commands/hash";
import { utilsCmd } from "./Commands/utils";
import process from "node:process";
import boxen from "boxen";
import chalk from "chalk";

const pkg = require("../package.json");

const program = new Command();

const logo = chalk.cyan.bold(`
    ______ ______     __  __ ______ __     __  _____
   / ____// ____/    / / / // ____/ \\ \\   / / / ___/
  / /    / /__      / /_/ // __/     \\ \\_/ /  \\__ \\ 
 / /___ / ___/     / __  // /___      \\  /  ___/ / 
 \\____//_/         /_/ /_//_____/      /_/  /____/  
`);

const showWelcomeBanner = () => {
  const bannerContent =
    `${logo}\n` +
    chalk.blueBright.bold(
      " ➔ Security & Utility Suite for Systems Engineering ",
    ) +
    "\n" +
    chalk.dim("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━") +
    "\n" +
    chalk.white(" Status: ") +
    chalk.green("Active") +
    chalk.gray(" | ") +
    chalk.white("Version: ") +
    chalk.yellow(pkg.version) +
    chalk.gray(" | ") +
    chalk.white("License: ") +
    chalk.magenta(pkg.license);

  console.log(
    boxen(bannerContent, {
      padding: 1,
      margin: { top: 1, bottom: 1, right: 0, left: 0 },
      borderStyle: "round",
      borderColor: "cyan",
      backgroundColor: "#1e1e1e",
    }),
  );
};

program
  .name("cf-keys")
  .description(pkg.description)
  .version(pkg.version)
  .action(() => {
    console.clear();
    showWelcomeBanner();
    program.help();
  });

program
  .command("welcome")
  .description("Show the suite welcome banner")
  .action(() => {
    showWelcomeBanner();
  });

program.addCommand(passwordCmd);
program.addCommand(youtubeCmd);
program.addCommand(jwtCmd);
program.addCommand(hashCmd);
program.addCommand(utilsCmd);

program.parse(process.argv);
