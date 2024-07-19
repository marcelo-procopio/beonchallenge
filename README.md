# Google Search Automation Tests

## Overview

This project contains automated tests for simulating search actions on Google using WebdriverIO and JavaScript with the Page Object Model (POM). The tests cover two main scenarios:
1. Valid Search
2. Search Result Navigation

## Test Cases

### 1. Valid Search

- **Description**: Simulates a search on Google and verifies that search results are displayed.
- **Steps**:
  1. Open Google homepage.
  2. Accept cookies if necessary.
  3. Enter a search query (`WebdriverIO`) into the search box.
  4. Submit the search form.
  5. Verify that search results are displayed.
- **Assertions**: Check that the number of search results is greater than zero.

### 2. Search Result Navigation

- **Description**: Simulates clicking on a search result and verifies redirection to the correct URL.
- **Steps**:
  1. Open Google homepage.
  2. Accept cookies if necessary.
  3. Enter a search query (`WebdriverIO`) into the search box.
  4. Submit the search form.
  5. Click on the first search result.
  6. Verify that the URL contains the expected domain.
- **Assertions**: Check that the current URL contains `webdriver.io`.

## Setup

### Prerequisites

- Node.js and npm installed.
- WebdriverIO and Appium configured.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/marcelo-procopio/beonchallenge
   cd Beon QA Challenge


2. Install dependencies:
    ```bash
    npm install

3. Start the Appium server:

    In a new terminal window,start the Appium server with:
    ```bash
    appium

4. Ensure you have the ChromeDriver installed:
    Install the ChromeDriver using:
    ```bash 
    npm install chromedriver --save-dev


### Running Tests:
    to execute the tests, run:
    ```bash
    npx wdio run wdio.conf.js
