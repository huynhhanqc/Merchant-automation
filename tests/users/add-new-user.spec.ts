import { AddNewUserPage } from "../../pages/users/AddNewUserPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("users - AddNewUserPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const addNewUser = new AddNewUserPage(page);

    await addNewUser.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Add New User/i, {
      timeout: 10000,
    });
  });
});
