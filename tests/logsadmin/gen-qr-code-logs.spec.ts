import { GenQrCodeLogsPage } from "../../pages/logsadmin/GenQrCodeLogsPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("logsadmin - GenQrCodeLogsPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const genQrCodeLogs = new GenQrCodeLogsPage(page);

    await genQrCodeLogs.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(
      /Gen QR Code Promoter Logs/i,
      {
        timeout: 10000,
      },
    );
  });
});
