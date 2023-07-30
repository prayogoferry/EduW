/// <reference types = "Cypress"/>

beforeEach(()=>{
    cy.login_success()
})

describe('Make Appointment', ()=>{
    const facility = ["Tokyo CURA Healthcare Center", "Hongkong CURA Healthcare Center","Seoul CURA Healthcare Center"]
    const program = ["#radio_program_medicare", "#radio_program_medicaid", "#radio_program_none"]
    let comment = "description"
    it('Apointment schema 1', () => {
        cy.appointment(facility[0], program[2], comment)
    });
    
})