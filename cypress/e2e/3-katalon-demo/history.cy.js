/// <reference types = "cypress"/>

beforeEach(()=>{
    cy.login_success()
})

describe('History Test', ()=>{
    const facility = ["Tokyo CURA Healthcare Center", "Hongkong CURA Healthcare Center","Seoul CURA Healthcare Center"]
    const program = ["#radio_program_medicare", "#radio_program_medicaid", "#radio_program_none"]
    let comment = "description"
    
    it('History Schema 1', () => {
        cy.get('#menu-toggle').click()
        cy.get(':nth-child(4) > a').click()
    });
})
