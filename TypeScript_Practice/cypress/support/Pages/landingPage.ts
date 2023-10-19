import BasePage from './basePage'
class LandingPage {

    invokeApp():void{
        cy.visit('/')
    }

    verifyBankName():void{
        cy.contains('XYZ Bank').should('be.visible')
    }

    // verifyButtonsOnLandingPage(){
    //    BasePage.verifyElementWithText('Home')
    //    BasePage.verifyElementWithText('Customer Login')
    //    BasePage.verifyElementWithText('Bank Manager Login')
    // }

    loginAsBankManager():void{
        cy.contains('Bank Manager Login').click()
    }

    navigateToCustomerLoginPage(){
        cy.contains('Customer Login').click()
    }

}

export default new LandingPage()