import 'cypress-xpath'

describe('template spec', () => {
  xit('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.contains('Accepted usernames are:').should('be.visible')
    // cy.get('#user-name').type('standard_user')
    // cy.get('#password').type('secret_sauce')
    // cy.get('#login-button').click()

    // cy.contains('Sauce Labs Onesie').should('be.visible')

    cy.get('.form_input').first().type('standard_user')
    cy.get('.form_input').last().type('secret_sauce')
  })

  it('write some automation to way2automation site resource', ()=>{

    cy.visit('https://www.saucedemo.com/')
    cy.xpath("//h4[contains(text(),'Accepted usernames')]").should('be.visible')
    cy.xpath('//*[@id="user-name"]').type('standard_user')
    cy.xpath('//*[@id="password"]').type('secret_sauce')
    cy.xpath('//*[@id="login-button"]').click()

    
  })
})