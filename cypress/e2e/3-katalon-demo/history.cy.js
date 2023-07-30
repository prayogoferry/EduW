/// <reference types = "cypress"/>

beforeEach(()=>{
    cy.login_success()
})

describe('History Test', ()=>{
    const facility = ["Tokyo CURA Healthcare Center", "Hongkong CURA Healthcare Center","Seoul CURA Healthcare Center"]
    const program = ["#radio_program_medicare", "#radio_program_medicaid", "#radio_program_none"]
    let comment = "description"
    
    it('History Schema with no appointment ', () => {
        cy.get('#menu-toggle').click()
        cy.get(':nth-child(4) > a').click()

        cy.url().should('contain', "/history.php#history")
        cy.get('h2').should('be.visible').should('contain', "History")
        cy.get('.col-sm-12 > p').should('be.visible').should('contain', "No appointment.")
    });

    it('History Schema with appointment ', () => {

        cy.appointment(facility[0], program[1], comment)
        cy.get('#menu-toggle').click()
        cy.get(':nth-child(4) > a').click()

        cy.url().should('contain', "/history.php#history")
        cy.get('.panel-heading').should('be.visible')
        cy.get('h2').should('be.visible').should('contain', "History")
    });


})
