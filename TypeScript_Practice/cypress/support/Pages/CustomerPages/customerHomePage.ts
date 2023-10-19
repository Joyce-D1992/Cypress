import BasePage from "../basePage";
import 'cypress-xpath'
class CustomerLoginPage{
   
    verifyCurrencyType(currencyType:string){

        let currencyXpath = '//strong[@class="ng-binding" and text()="'+currencyType+'"]'
        cy.xpath(currencyXpath).should('be.visible')
    }

    depositAmount(amount:string){
        cy.xpath("//button[@ng-class='btnClass2']").click();
        cy.xpath("//input[@type='number']").type(amount);
        cy.xpath("//button[@type='submit']").click();
        cy.contains('Deposit Successful').should('be.visible');
        cy.contains('Balance : '+amount).should('be.visible');
    }

    withdrawAmount(amount:string){
        cy.xpath("//button[@ng-class='btnClass3']").click();
        cy.xpath("//input[@type='number']").type(amount);
        cy.xpath("//button[@type='submit']").click();
        cy.contains('Transaction successful').should('be.visible');
        cy.contains('Balance :'+amount).should('be.visible');
    }
}

export default new CustomerLoginPage();