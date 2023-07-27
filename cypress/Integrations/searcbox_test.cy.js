/// <reference types = "Cypress"/>

describe('SearchBox test',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').clear().type('some text {enter}')//#menunjuk id xpath
    });
})
