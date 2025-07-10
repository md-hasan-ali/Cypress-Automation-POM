import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const homePage = require("../../pages/homePage")

// Sign-up:
Given("User open the demoblaze website", function () {
  cy.visit("/")
});
When("Enter the user name and password", ()=> {
  cy.login2("Hasan Ali", "123456")
})
When("Click on the Sign Up button", () => {
  homePage.signUp()
})
When("Enter your username {string}", (userName) => {
  homePage.userName(userName)
})
Then("Enter your password {string}", (password) => {
  homePage.password(password)
})
Then("Click on the submit button", () => {
  homePage.submitBtn()
})

// Log In

Then("Click on the login button", () => {
  homePage.loginBtn()
})
Then("Enter your login user name {string}", (username) => {
  homePage.loginUserName(username)
})
Then("Enter your login password {string}", (password) => {
  homePage.loginPassword(password)
})
Then("Click on the submit login", () => {
  homePage.loginSubmitBtn()
})
