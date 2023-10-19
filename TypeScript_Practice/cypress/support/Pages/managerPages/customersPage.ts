import 'cypress-xpath'

class CustomerPageTests{

        // deleteAllCustomers():void{
        //     cy.wait(3000)
        //     cy.xpath("//button[.='Delete']").each(($el)=>{
        //         $el.click()
        //     })
        // }

    searchCustomer(customerName:string):void{
        let txtsearchCustomerNameXpath = "//input[@type='text' and @placeholder='Search Customer']"
       cy.xpath(txtsearchCustomerNameXpath).type(customerName)
    }
}

export default new CustomerPageTests()