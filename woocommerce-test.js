const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false }); // Set headless: true for faster execution without a UI
  const page = await browser.newPage();

  // Navigate to the WooCommerce site
  await page.goto('http://localhost/wordpress');

  // Click on a specific product from the product list (use the product title or image link selector)
  await page.click('text=Shop'); // Change to your actual product

  await page.click('a:has-text("Jeans")');
  // // Add the product to the cart
  await page.click('button:has-text("Add to cart")');
  

  // // Wait for confirmation that the product is added to the cart
  await page.waitForSelector('text=“Jeans” has been added to your cart.'); // WooCommerce typically shows this message

  await page.click('a:has-text("Proceed to Checkout")');

  await page.waitForSelector('text=We\'ll use this email to send you details and updates about your order.');

  await page.fill('#email', 'john.doe@example.com');

  await page.fill('#shipping-first_name', 'John');

  // Fill the "Last Name" field (assuming the field has id="last_name")
  await page.fill('#shipping-last_name', 'Doe');

  await page.fill('#shipping-address_1', 'malibag');
  
  await page.fill('#shipping-city', 'Dhaka')
  
  await page.waitForSelector('text=Free shipping');

  await page.click('button:has-text("Place Order")');
  
  // Wait for the page to finish loading after the redirect
  // await page.waitForLoadState('networkidle');  // Waits until there are no more network connections for at least 500 ms
  await page.waitForTimeout(2000);
  await page.click('button:has-text("Place Order")');
  // Confirm the navigation happened by printing the new URL
  // console.log('Redirected to:', page.url());
  await page.waitForSelector('text=Thank you. Your order has been received.');
  // Take a screenshot of the cart page
  await page.screenshot({ path: 'cart.png', fullPage: true });

  // Close browser
  await browser.close();
})();
