class managerHomePage{

    navigateToCustomersPage():void{
        cy.contains('Customers').click()
    }
}

export default new managerHomePage()