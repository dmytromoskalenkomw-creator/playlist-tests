# playlist-tests
AQA Engineer test assessment - Playlist App

This repository contains automated end-to-end UI tests for the [Playlist App](https://vite-react-alpha-lemon.vercel.app/). Tests are written in **JavaScript** using **Playwright**.

Project Setup

1. Clone this repository:

1.1 git clone https://github.com/dmytromoskalenkomw-creator/playlist-tests/
1.2 cd playlist-tests

2. Initialize npm project

npm init -y

3. Install Playwright and dependencies:

npm install -D @playwright/test
npm install dotenv

4. Install Playwright browsers:

npx playwright install

5. Running tests

Run all tests (headless mode): npm test

Run tests with a visible browser: npx playwright test --headed
