import { test, expect } from "@playwright/test";
import { config as loadEnv } from "dotenv";
import { LoginPage } from "../../pages/auth/LoginPage.ts";

loadEnv();

const BASE_URL =
  process.env.BASE_URL?.trim() ?? "https://test-merchant.hasaki.vn";
const LOGIN_USER = process.env.LOGIN_USER?.trim() ?? "truonghan1506";
const LOGIN_PASS = process.env.LOGIN_PASS?.trim() ?? "Truonghan1506";

const successUrlMatcher = /.*Dashboard|.*promoter|.*home|.*pg-draft/i;
const authErrorMatcher = /invalid|failed|sai|không đúng|tài khoản|mật khẩu/i;

test.describe.skip("Login page", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto(BASE_URL);
  });

  test("should login successfully with valid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(LOGIN_USER, LOGIN_PASS);
    await expect(page).toHaveURL(successUrlMatcher, { timeout: 60000 });
  });

  test("should show validation errors when credentials are empty", async ({
    page,
  }) => {
    const login = new LoginPage(page);

    await login.usernameInput.fill("");
    await login.passwordInput.fill("");
    await login.submitButton.click();

    // Either browser-native required message or inline text
    const errorText = page.locator(
      "//div[@class='alert alert-danger flashSession']",
    );
    await expect(errorText.first()).toBeVisible({ timeout: 30000 });

    await expect(page).not.toHaveURL(successUrlMatcher);
  });

  test("should reject login with invalid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.usernameInput.fill(LOGIN_USER);
    await login.passwordInput.fill("WrongPassword123!");
    await login.submitButton.click();

    await expect(page).not.toHaveURL(successUrlMatcher);
    const err = page.locator(
      `:text-matches("${authErrorMatcher.source}", "i")`,
    );
    await expect(err.first()).toBeVisible({ timeout: 15000 });
  });

  test("should reject login with a not found user", async ({ page }) => {
    const login = new LoginPage(page);
    await login.usernameInput.fill("notfound_user@test.com");
    await login.passwordInput.fill("Password123!");
    await login.submitButton.click();

    await expect(page).not.toHaveURL(successUrlMatcher);
    const err = page.locator(
      `:text-matches("${authErrorMatcher.source}", "i")`,
    );
    await expect(err.first()).toBeVisible({ timeout: 15000 });
  });
});
