// Custom Commands 
Cypress.Commands.add('login2', (username, password) => {
  cy.get('#sign-username').type(username)
  cy.get('#sign-password').type(password)
})
