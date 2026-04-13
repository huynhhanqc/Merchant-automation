import { ReportBrandPage } from "../../pages/report/ReportBrandPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("report - ReportBrandPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const reportBrand = new ReportBrandPage(page);

    await reportBrand.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Report Brands/i, {
      timeout: 10000,
    });
  });
});
