import { SentApiLogsPage } from "../../pages/logsadmin/SentApiLogsPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("logsadmin - SentApiLogsPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const sentApiLogs = new SentApiLogsPage(page);

    await sentApiLogs.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Sent API Logs/i, {
      timeout: 10000,
    });
  });
});
