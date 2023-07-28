/// <reference types = "Cypress"/>

describe('Nvabar Test', ()=>{
    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online Banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('contain', '/online-banking.html')
        
    });

    it("Should display feedback content", () => {
        ;
    });

    it('Should display ', () => {
        
    });
})