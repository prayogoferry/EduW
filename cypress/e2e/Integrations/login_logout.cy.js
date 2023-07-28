/// <reference types = "Cypress"/>

describe('Login/Logout test',  ()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click

    })

    it('Should try login use invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalidusername')
        cy.get('user_password').type('inpassword')
        cy.contains('submit').click()
    });

    it("Should display error message", () => {
        ;
    });

    it('should try login use valid data', () => {
        
    });

    it('Should logout', () => {
        
    });
})