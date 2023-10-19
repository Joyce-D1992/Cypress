describe('Cyprees Demo', ()=>{

    it('valid user login test scenario', ()=>{

        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name',).type('standard_user')
        //cy.get('#user-name',).type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Sauce Labs Bike Light').should('be.visible')
    })
})