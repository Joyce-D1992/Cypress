class BasePage{

    verifyElementWithText(btnText:string):void{
        cy.wait(5000)
        cy.contains(btnText).should('be.visible')
    }
}

export default new BasePage()

