import { AddNewCoursePage } from "../../pages/courses/AddNewCoursePage.ts";
import { test, expect } from "../../fixtures/index.ts";

test.describe("courses - AddNewCoursePage Navigate", () => {
  test.describe.configure({ timeout: 60 * 1000 });

  test("Navigate @smoke", async ({ authenticatedPage, baseUrl }) => {
    const { page } = authenticatedPage;
    const pageObject = new AddNewCoursePage(page);

    await pageObject.goto(baseUrl);

    await expect(page.locator(".page-title")).toContainText(/Add new Course/i, {
      timeout: 10000,
    });
  });
});
