/// <reference types="cypress"/>
describe('Xpath Example',()=>{

    let userInfo

    before(()=>{

        cy.fixture('example').then((data)=>{

          userInfo=data

        })
    })

    it('Verify Xpath',()=>{

        cy.log('Execution started')
  
        //cy.visit('http://google.com/')
        cy.visit('/')

        //cy.wait(5000)

       cy.xpath("//textarea[@name='q']").type('Hello Cypress!!!')

      //  cy.fixture('example').then((data)=>{

      //     cy.log(data.name)
      //  })

      cy.log(userInfo.name)
      cy.log(userInfo.email)
    })
        
  
  })
