/// <reference types = "Cypress"/>

describe('SearchBox test',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit', function Search() {
        cy.get('#searchTerm').clear().type('some text {enter}')//#menunjuk id xpath
    
        // cy.get('h2').should('contain.text', "Search Results")
    });

    it('Should show result page', () => {
        cy.get('h2').should('contain.text', "Search Results")
    });

    // it('tugas searchbox', () => {
    //     let key = 'online'

    //     cy.get('#searchTerm').clear().type("online {enter}")//#menunjuk id xpath
        
    // });
})
