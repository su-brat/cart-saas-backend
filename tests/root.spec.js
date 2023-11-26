const { prod_env, url } = require("./config/variables");

if (!prod_env) {
  const { test, expect } = require("@playwright/test");

  test("root health check", async ({ page }) => {
    const response = await page.goto(`${url}/`);
    expect(response.status()).toEqual(200);
  });
}
