/**
 * Global Setup — chạy 1 lần trước toàn bộ test suite
 * Mục đích: Login admin 1 lần, lưu session state → tất cả test reuse session này
 * Tránh login lặp lại ở mỗi test → giảm thời gian chạy đáng kể
 */
import { chromium } from "@playwright/test";
import { config as loadEnv } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { LoginPage } from "./pages/auth/LoginPage.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
loadEnv({ path: path.resolve(__dirname, ".env.local") });

export default async function globalSetup() {
  const baseUrl = process.env.BASE_URL?.trim();
  const username = process.env.LOGIN_USER_ADMIN?.trim();
  const password = process.env.LOGIN_PASS_ADMIN?.trim();

  if (!baseUrl || !username || !password) {
    throw new Error(
      "Missing required env vars: BASE_URL, LOGIN_USER_ADMIN, LOGIN_PASS_ADMIN",
    );
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();

  const login = new LoginPage(page);
  await login.goto(baseUrl);
  await login.login(username, password);

  // Lưu auth state — tất cả test sẽ reuse session này
  await context.storageState({
    path: path.resolve(__dirname, "playwright/.auth/admin.json"),
  });

  await browser.close();
}
