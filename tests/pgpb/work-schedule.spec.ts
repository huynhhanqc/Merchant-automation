import { WorkSchedulePage } from "../../pages/pgpb/WorkSchedulePage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("pgpb - WorkSchedulePage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const workSchedule = new WorkSchedulePage(page);

    await workSchedule.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Work Schedule/i, {
      timeout: 10000,
    });
  });
});
