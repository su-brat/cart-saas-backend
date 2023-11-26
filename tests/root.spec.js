const { dev_env, url } = require("./config/variables");

if (dev_env) {
  const { test, expect } = require("@playwright/test");

  test("root health check", async ({ page }) => {
    const response = await page.goto(`${url}/`);
    expect(response.status()).toEqual(300);
  });
}
