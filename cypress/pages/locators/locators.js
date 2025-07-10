// All web elements 
class Locators {

    // signUp locatos 
    signUp = "#signin2";
    userName = "#sign-username";
    userPassword = "#sign-password";
    signUpBtn = '//button[contains(text(), "Sign up")]'

    // login locators 

    loginBtn = "(//a[normalize-space()='Log in'])[1]"
    login_username = "#loginusername"
    login_password = "#loginpassword"
    submit_loging = '//button[contains(text(), "Log in")]'

}

module.exports = new Locators();