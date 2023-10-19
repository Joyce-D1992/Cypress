import customerHomePage from "../../support/Pages/CustomerPages/customerHomePage";
import customerLoginPage from "../../support/Pages/CustomerPages/customerLoginPage";
import landingPage from "../../support/Pages/landingPage"

describe('tests related to transactions', ()=>{

    beforeEach('Invoke customer home page',()=>{
        landingPage.invokeApp();
        landingPage.navigateToCustomerLoginPage();
    })

    it('Login as user and verify elements on the home page',()=>{
        customerLoginPage.loginAsUser('Harry Potter')
        customerHomePage.verifyCurrencyType('Dollar')
    })

    it('Login as customer, Deposit and verify the balance',()=>{
        customerLoginPage.loginAsUser('Harry Potter');
        customerHomePage.depositAmount('1000');
    })

    it.skip('Login as customer, Withdraw and verify the balance',()=>{
        customerLoginPage.loginAsUser('Harry Potter');
        customerHomePage.withdrawAmount('300');
    })

    it('Customer deposit amount using fixture files',()=>{
        cy.fixture('deposit').as('depositInfo').then(jsonData=>{
            //cy.log(JSON.stringify(jsonData))
            customerLoginPage.loginAsUser(jsonData.userName)
            customerHomePage.depositAmount(jsonData.depositAmount)
        })
    })
})