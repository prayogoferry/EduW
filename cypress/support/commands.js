// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('load_dataUser',()=>{
    cy.fixture("user").as('data_user')
})

Cypress.Commands.add('getLoginPage',()=>{
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
    cy.get('#signin_button').click()
    cy.url().should('include', "login.html")
})

Cypress.Commands.add('loginStep',(username, password)=>{
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('.btn').click()
})