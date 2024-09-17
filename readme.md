# Playwright WooCommerce Automation

This project is a Playwright-based automation suite for a WordPress WooCommerce website. The scripts automate tasks like placing orders, handling redirects, and taking full-page screenshots.

## Features

- Automates filling in WooCommerce checkout forms.
- Handles dynamic elements and redirects.
- Waits for page navigation and dynamic content loading.
- Takes full-page screenshots after certain actions.
- Uses Playwright for modern browser automation.

## Prerequisites

- Node.js (>=14.x)
- npm (or yarn)

## Setup

1. **Clone the repository from**:
    ```bash
    https://github.com/mahpara-khabir/wordpress-wocommerce
    ```

2. **Install dependencies**:
    Run the following command in the project root:
    ```bash
    npm install
    ```
    This will install Playwright and its required dependencies.

3. **Install Playwright browsers**:
    After installing the dependencies, you need to install the Playwright browsers:
    ```bash
    npx playwright install
    ```

## Usage

### Running the Automation Script

You can run the main script (`woocommerce-test.js` or any other script file) using the following command:

```bash
node woocommerce-test.js