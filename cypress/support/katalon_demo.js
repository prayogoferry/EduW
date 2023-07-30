
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
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').clear().type(dt_katalon.username)
    cy.get('#txt-password').clear().type(dt_katalon.password)
    cy.get('#btn-login').click()
    })
})

Cypress.Commands.add('appointment', (facility, program, comment)=>{
    cy.get('#combo_facility').select(facility)
    cy.get('#chk_hospotal_readmission').check()
    cy.get(program).check()
    cy.get('#txt_visit_date').click()
    cy.get(':nth-child(5) > :nth-child(7)').click()
    cy.get('#txt_comment').clear().type(comment)
    cy.get('#btn-book-appointment').click()

})