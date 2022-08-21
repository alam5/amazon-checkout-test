# amazon-checkout-test
This repo has cypress tests for login and checkout of amazon app 

## Project information
This project contains two cypress test:
1. Login into amazon app
2. Login to amazon app, search TV item,add to cart and proceed to checkout screen

## Pre-req
1. NodeJS is installed 
2. npm is installed

## Setup
1. Clone this repositoy 
2. Go to testdata file: `cypress/fixtures/testdata.json`
3. Ente your Amazon website `email` and `passowrd` in `testdata.json` and save file. Make sure multi-factor authentication is not enabled. If enabled then approve request from your mobile first.
4. Open terminal to root directory and run `npm install` command in cli which will install all the devdependencies
5. Now run `npm test` on your terminal to execute cypress tests.
6. It will execute test in cli and generate test result report at path: `cypress/reports/result.html/index.html`
