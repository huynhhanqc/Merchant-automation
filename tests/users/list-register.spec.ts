import { ListRegisterPage } from "../../pages/users/ListRegisterPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("users - ListRegisterPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const listRegister = new ListRegisterPage(page);

    await listRegister.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(
      /Register Vendor List/i,
      {
        timeout: 10000,
      },
    );
  });
});
