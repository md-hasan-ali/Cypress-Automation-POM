const locators = require("./locators/locators")
// Home page methods
class HomePage {
    // sign up
    signUp() {
        cy.get(locators.signUp).click()
        cy.wait(1000)
    }
    userName(userName) {
        cy.fixture('user').then((userData) => {
            cy.get(locators.userName).type(userData.validUser.username);
            cy.log(userData.validUser.username)
        });
        cy.wait(1000)
    }
    password(password) {
        cy.get(locators.userPassword).type(password)
        cy.wait(1000)
    }
    submitBtn() {
        cy.xpath(locators.signUpBtn).click()
        cy.wait(1000)
    }

    // login 
    loginBtn() {
        cy.xpath(locators.loginBtn).click()
        cy.wait(1000)
    }
    loginUserName(username) {
        cy.get(locators.login_username).type(username)
        cy.wait(1000)
    }
    loginPassword(password) {
        cy.get(locators.login_password).type(password)
        cy.wait(1000)
    }
    loginSubmitBtn() {
        cy.xpath(locators.submit_loging).click()
        cy.wait(1000)
    }
}

module.exports = new HomePage()