import { AddNewLessonPage } from "../../pages/courses/AddNewLessonPage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("courses - AddNewLessonPage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const addNewLesson = new AddNewLessonPage(page);

    await addNewLesson.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Add new Lesson/i, {
      timeout: 10000,
    });
  });
});
