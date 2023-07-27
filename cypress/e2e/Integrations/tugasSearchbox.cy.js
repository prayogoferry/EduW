/// <reference types = "Cypress"/>

describe('SearchBox test',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

   
    it('tugas searchbox', () => {
        let key = 'online'

        cy.get('#searchTerm').clear().type("online {enter}")//#menunjuk id xpath
        cy.get('h2').should('contain', "Search Results")
        cy.get(':nth-child(2) > a').should('contain', "Online")
        // cy.contains('::marker')
        
        
    });
})
