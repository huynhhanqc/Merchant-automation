import { VendorConfirmPoPage } from "../../pages/settingadmin/VendorComfirmPoPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("settingadmin - VendorConfirmPoPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const vendorConfirmPo = new VendorConfirmPoPage(page);

    await vendorConfirmPo.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(
      /Vendor Confirm PO Pending/i,
      {
        timeout: 10000,
      },
    );
  });
});
