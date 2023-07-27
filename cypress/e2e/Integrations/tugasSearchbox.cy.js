/// <reference types = "Cypress"/>

describe('SearchBox test',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

   
    it('tugas searchbox', () => {
        let key = 'online'

        cy.get('#searchTerm').clear().type("online {enter}")//#menunjuk id xpath
        
        
    });
})
