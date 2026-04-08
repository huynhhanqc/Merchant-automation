# Playwright CLI Shortcuts (remain.md)

## 1) Chạy toàn bộ test

```bash
cd /Users/mac/Coding/AI-generate_test
npx playwright test
```

---

## 2) Chạy test GUI (Playwright Test Runner)

```bash
npx playwright test --ui
```

- Chọn test theo từng module trong UI
- Chạy/debug trực quan

---

## 3) Chạy một file test, có `browserContext` và `headful`

```bash
npx playwright test tests/pgpb/create-pg-staff.spec.ts --headed --workers=1
```

- `--headed`: không headless, nhìn thấy browser
- `--workers=1`: chạy tuần tự (dễ debug)

---

## 4) Xem danh sách test

```bash
npx playwright test --list
```

---

## 5) HTML report

```bash
npx playwright show-report
```

---

## 6) Config environment

_.env.local_:

```env
BASE_URL=https://test-merchant.hasaki.vn
LOGIN_USER=truonghan1506
LOGIN_PASS=Truonghan1506
```

---

## 7) TypeScript check

```bash
npx tsc --noEmit
```

---

## 8) Cấu trúc thư mục (sau refactor)

- `pages/` - Page Object classes
  - `pages/auth/LoginPage.ts`
  - `pages/pgpb/PgStaffPage.ts`
- `tests/` - playwright test specs
  - `tests/pgpb/create-pg-staff.spec.ts`
- `config/playwright.config.ts`
- `.env.local` - runtime env secret

---

## 9) Sau khi chạy rồi, thấy lỗi ping/chậm

- tăng timeout test-level:
  - `test.describe.configure({ timeout: 120 * 1000 })`
- tăng `waitForURL` timeout
- thêm `await page.waitForLoadState('networkidle')`

---

## 10) Sử dụng test trong UI đen

```bash
npx playwright test --ui
```

Sau đó click: `Run all` / chọn test cụ thể / mở trace/screenshot.
