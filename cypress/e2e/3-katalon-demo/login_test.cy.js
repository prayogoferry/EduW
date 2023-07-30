/// <reference types = "cypress"/>

beforeEach(()=>{
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.load_dkatalon()
})

describe('Login Test',()=>{
    it('Login use valid data', () => {
        cy.get("@data_katalon").then(dt_katalon=>{
           
            cy.loginKtln(dt_katalon.username, dt_katalon.password)
        })

        cy.log("Assertion Success Login")
        cy.url().should('include', '/#appointment')
        cy.get('h2').should('be.visible')
    });

    it('Login use invalid data', () => {
        cy.loginKtln('usename', 'password')

        cy.log('assertion loginpage failed')
        cy.url().should('contain', '/profile.php#login')
        cy.get('.text-danger').should('be.visible').should('contain', 'Login failed')
    });

    it('Try Logout', () => {
        cy.login_success()

        cy.get('#menu-toggle').click()
        cy.get(':nth-child(6) > a').click()

        cy.log("Logout Assertion")
        cy.url().should('contain', 'katalon-demo-cura.herokuapp.com')
    });
})
