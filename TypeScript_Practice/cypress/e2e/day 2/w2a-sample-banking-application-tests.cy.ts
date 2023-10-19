import 'cypress-xpath'
import '@faker-js/faker'
import { faker } from '@faker-js/faker';

describe('cypress test on sample banking application on w2a website', ()=>{

    it('Create and verify customer account', ()=>{

        //invoke application
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login');
        //login as manager
        cy.contains('Bank Manager Login').click()
        //click on Customers tab
        cy.contains('Customers').click()
        //delete all existing customers
        //cy.wait(2000)
        cy.xpath("//button[.='Delete']").each(($el)=>{
            $el.click()
        })
        //cy.wait(3000)
        //naviagte to Add Customer tab
        cy.contains('Add Customer').click();

        //create dummy customer data
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const postalCode = faker.address.zipCode()

        //fill customer data in the form
        cy.xpath("//input[@ng-model='fName']").type(firstName)
        cy.xpath("//input[@ng-model='lName']").type(lastName)
        cy.xpath("//input[@ng-model='postCd']").type(postalCode)
        cy.xpath("//button[text()='Add Customer']").click()

        //cy.contains('Customers').click()

        const customerFullName = firstName+ " " +lastName
        //Generate customer account number with currency as Rupee
        cy.xpath("//button[contains(text(),'Open ')]").click()
        cy.get("#userSelect").select(customerFullName)
        cy.get('#currency').select('Rupee')
        cy.xpath("//button[@type='submit']").click()

        //Generate customer account number with currency as Dollar
        cy.xpath("//button[contains(text(),'Open ')]").click()
        cy.get("#userSelect").select(customerFullName)
        cy.get('#currency').select('Dollar')
        cy.xpath("//button[@type='submit']").click()

        //Generate customer account number with currency as Pound
        cy.xpath("//button[contains(text(),'Open ')]").click()
        cy.get("#userSelect").select(customerFullName)
        cy.get('#currency').select('Pound')
        cy.xpath("//button[@type='submit']").click()

        //Get customer details and save it
        //select Customers tab
        cy.contains('Customers').click()
        // //Get customer first name
        // let customerFirstNameDisplayed
        // cy.xpath('//table/tbody/tr/td[1]').then($el=>{
        //     customerFirstNameDisplayed = $el.text()
        //     cy.wrap(customerFirstNameDisplayed).as('firstNameDisplayed')
        // })
        // cy.get('@firstNameDisplayed').then($firstName=>{
        //     cy.log("First Name is : "+$firstName)
        // })

        //Get customer first name
        cy.xpath('//table/tbody/tr/td[1]').then($el=>{
            cy.wrap($el.text()).as('firstNameDisplayed')
        })

        //Get customer last name
        cy.xpath('//table/tbody/tr/td[2]').then($el=>{
            cy.wrap($el.text()).as('lastNameDisplayed')
        })

         //Get customer post code
         cy.xpath('//table/tbody/tr/td[3]').then($el=>{
            cy.wrap($el.text()).as('postCodeDisplayed')
        })

        //Get customer account numbers
        cy.xpath('//table/tbody/tr/td[4]').then($el=>{
            cy.wrap($el.text()).as('accountNumbersDisplayed')
            cy.log('Account numbers are : '+$el.text())
        })

        cy.get('@accountNumbersDisplayed').then($accounts=>{
            let accountsList = $accounts.toString().split(' ')
            cy.log("First account number: "+accountsList[0])
            cy.log("Second account number: "+accountsList[1])
            cy.log("Third account number: "+accountsList[2])
        })       
       

        //Click on Home 
        cy.xpath("//button[text()='Home']").click()
        //Click on Customer Login
        cy.xpath("//button[text()='Customer Login']").click()
        //select customer name from drop down
        cy.get("#userSelect").select(customerFullName)
        //click on Login button
        cy.xpath("//button[text()='Login']").click()
        //click on Deposit tab
        cy.xpath("//button[contains(text(),'Deposit')]").click()
        //enter Amount to be Deposited
        cy.xpath('//input').type('200')
        //click on Deposit button
        cy.xpath("//button[text()='Deposit']").click()
        //click on Transactions tab
        cy.xpath("//button[contains(text(),'Transactions')]").click()
        //click on Withdrawl tab
        cy.xpath("//button[contains(text(),'Withdraw')]").click()
        //enter Amount to be Withdrawn 
        cy.wait(2000)
        cy.xpath("//input").type('100')
        //click on Withdraw button
        cy.wait(2000)
        cy.xpath("//button[text()='Withdraw']").click()
         //click on Transactions tab
         cy.xpath("//button[contains(text(),'Transactions')]").click()

        //click on Back button 
        cy.wait(2000)
        cy.xpath("//button[text()='Back']").click()
        //click on Transactions tab
        cy.xpath("//button[contains(text(),'Transactions')]").click()
        //click on Back button 
        cy.wait(2000)
        cy.xpath("//button[text()='Back']").click()
        //check balance is 100
        cy.wait(5000)
        cy.xpath("//div[@class='center'][1]/strong[2]").contains('100')

    })
}) 