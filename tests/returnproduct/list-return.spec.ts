import { ListReturnPage } from "../../pages/returnproduct/ListReturn.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("returnproduct - ListReturn Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const listReturn = new ListReturnPage(page);

    await listReturn.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Return Product/i, {
      timeout: 10000,
    });
  });
});
