Cypress.Commands.add('load_dataSDemo', ()=>{
    cy.fixture("saucedemo").as("saucedemo_data")
})

Cypress.Commands.add('loginStep', (username, password)=>{
    cy.get('.user-name').clear().type(username)
    cy.get('.password').clear().type(password)
    cy.contains('Login').click()
})