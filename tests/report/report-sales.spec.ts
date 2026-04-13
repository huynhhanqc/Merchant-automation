import { ReportSalesPage } from "../../pages/report/ReportSalesPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("report - ReportSalesPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const reportSales = new ReportSalesPage(page);

    await reportSales.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Report Sales/i, {
      timeout: 10000,
    });
  });
});
