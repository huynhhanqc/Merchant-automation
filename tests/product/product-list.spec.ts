import { ProductListPage } from "../../pages/product/ProductListPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("product - ProductListPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const pageObject = new ProductListPage(page);

    await pageObject.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Product List/i, {
      timeout: 10000,
    });
  });
});
