/// <reference types = "Cypress"/>

describe('LoginPage', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        // cy.visit('facebook.com')
        cy.load_dataSDemo()
    })

    it('Login with', () => {
        cy.get('saucedemo_data').then(data_SD=>{
            cy.loginStep(data_SD.username[0], data_SD.password[0])
        })
    });
})