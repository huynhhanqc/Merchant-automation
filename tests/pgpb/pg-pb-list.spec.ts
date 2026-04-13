import { ListPgPbPage } from "../../pages/pgpb/PgPbListPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("pgpb - PgPbListPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const listPgPb = new ListPgPbPage(page);

    await listPgPb.goto(baseUrl);

    await expect(page.locator("//p[@class='w-100 fs-6 mb-2']")).toContainText(
      / PG\/PB underlined in the Full Name column are currently inactive./i,
      {
        timeout: 10000,
      },
    );
  });
});
