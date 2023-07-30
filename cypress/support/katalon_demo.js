
Cypress.Commands.add('load_dkatalon', ()=>{
    cy.fixture("katalon_demo").as('data_katalon')
})

Cypress.Commands.add('loginStep', (username, password)=>{

    cy.get('#txt-username').clear().type(username)
    cy.get('#txt-password').clear().type(password)
    cy.contains('submit').click()
})