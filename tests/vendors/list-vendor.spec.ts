import { ListVendorPage } from "../../pages/vendors/ListVendorPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("vendors - ListVendorPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const listVendor = new ListVendorPage(page);

    await listVendor.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Vendor List/i, {
      timeout: 10000,
    });
  });
});
