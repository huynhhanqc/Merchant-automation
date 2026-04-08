import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "../tests",
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
  use: {
    headless: true,
    viewport: null,
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: "on-first-retry",
    launchOptions: {
      args: ["--start-maximized"],
    },
  },
};

export default config;
