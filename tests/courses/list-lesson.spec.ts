import { ListLessonPage } from "../../pages/courses/ListLessonPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("courses - ListLessonPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const pageObject = new ListLessonPage(page);

    await pageObject.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Lesson List/i, {
      timeout: 10000,
    });
  });
});
