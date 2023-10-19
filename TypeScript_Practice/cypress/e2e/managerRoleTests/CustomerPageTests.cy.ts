import landingPage from "../../support/Pages/landingPage"
import managerHomePage from '../../support/Pages/managerPages/managerHomePages'
import customersPage from "../../support/Pages/managerPages/customersPage"

describe('Tests for the Customers Page',()=>{

    before('invoke app and login as manager',()=>{

        landingPage.invokeApp()
        landingPage.loginAsBankManager()
    })

    // it('Delete all existing customers',()=>{

    //     managerHomePage.navigateToCustomersPage()
    //     customersPage.deleteAllCustomers()

    // })

    //Search a customer with name 'Joyce' and delete it
    it('Search and delete a customer',()=>{
        
        customersPage.searchCustomer('Joyce')
        cy.contains('Delete').click()


    })
})