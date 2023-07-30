
Cypress.Commands.add('load_dkatalon', ()=>{
    cy.fixture("katalon_demo").as('data_katalon')
})

Cypress.Commands.add('loginKtln', (username, password)=>{
    cy.get('#btn-make-appointment').click()
    cy.log('assertion loginpage')
    cy.url().should('contain', '/profile.php#login')
    cy.get('#txt-username').clear().type(username)
    cy.get('#txt-password').clear().type(password)
    cy.get('#btn-login').click()
})

Cypress.Commands.add('login_success',()=>{
    cy.fixture("katalon_demo").then(dt_katalon=>{
    
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').clear().type(dt_katalon.username)
    cy.get('#txt-password').clear().type(dt_katalon.password)
    cy.get('#btn-login').click()
    })
})