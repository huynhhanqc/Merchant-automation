import { ListUserPage } from "../../pages/users/ListUserPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("users - ListUserPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const listUser = new ListUserPage(page);

    await listUser.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/User List/i, {
      timeout: 10000,
    });
  });
});
