import { PoDeliveryPage } from "../../pages/purchase/PoDeliveryPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("purchase - PoDeliveryPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const poDelivery = new PoDeliveryPage(page);

    await poDelivery.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/PO Delivery/i, {
      timeout: 10000,
    });
  });
});
