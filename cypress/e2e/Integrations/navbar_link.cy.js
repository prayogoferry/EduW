/// <reference types = "Cypress"/>

describe('Nvabar Test', ()=>{
    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online Banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('contain', '/online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('#onlineBankingMenu > div > strong').should('be.visible')
        cy.get('h3').should('be.visible')
       // cy.get('h3').should('include.text', "Our Bank is trusted by over 1,000,000 customers world wide. Sign in now!")
    });

    it("Should display feedback content", () => {
       cy.contains('Feedback').click()
       cy.url().should('include', "feedback.html")
       cy.get('#description > p').should('be.visible')//description
       cy.get('.offset3 > :nth-child(3)').should('be.visible')//alert

    });

    it('Should display HomePage ', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('#homeMenu > div > strong').should('be.visible')
        cy.get('.active > .custom > h4').should('be.visible')//title description
        cy.get('.active > .custom > p').should('be.visible')//description 

        
    });
})