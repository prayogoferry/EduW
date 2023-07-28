/// <reference types = "Cypress"/>

describe('Login/Logout test',  ()=>{
    beforeEach(()=>{
        cy.load_dataUser()

    })

    it('Should try login use invalid data', () => {
        let fusername ='invalidusernmae'
        let fpassword ='fpassword'

        cy.getLoginPage()
        cy.loginStep(fusername, fusername)
       

        cy.log("Assertion Erorr Message")
        cy.get('h3').should('contain', "Troubles entering the site?")
        cy.get('.alert').should('contain', "Login and/or password are wrong.")
    });

    // it("Should display error message", () => {
    //     cy.get('h3').should('contain', "")
    // });

    it('should try login use valid data', () => {
        cy.get("@data_user").then(dataUser=>{
            cy.getLoginPage()
        cy.loginStep(dataUser.username[0], dataUser.password[0])
        })
        
        cy.log('Assertion Successfull Login')
        cy.url().should('include', "/bank/account-summary.html")
        // cy.get('.dropdown-toggle').should('contain', dataUser.username[0] )
        cy.get(':nth-child(3) > .dropdown-toggle').should('contain', dataUser.username[0])
    });

    it('Should logout', () => {
        cy.get("@data_user").then(dataUser=>{
            cy.getLoginPage()
        cy.loginStep(dataUser.username[0], dataUser.password[0])
        })
    });
})