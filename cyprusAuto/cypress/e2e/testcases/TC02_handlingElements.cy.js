/// <reference types="cypress"/>
describe('Check the Page Navigation',()=>{

    it('Verify Element visibility and attribute values',()=>{
  
        cy.visit('http://qa.way2automation.com')
        cy.url().should('include', '/index.php')
        cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').type('Joyce')

        //cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').invoke('attr','name').should('contain','name')

        cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').invoke('attr','type').should('contain','text')
       
  
  })

  it.only('Verify Parent, Child and within Elements',()=>{
  
    cy.visit('http://qa.way2automation.com')
    cy.url().should('include', '/index.php')
    
    // cy.get('#load_box').find('input').its('length').then((elementtLength) =>{

    //     cy.log(elementtLength)

    // })

    //find children

    // cy.get('#load_box > form > fieldset').children('input').should('not.have','hidden').its('length').then((elementtLength) =>{

    //     cy.log(elementtLength)

    // })

    //find within that form / block/ section
   //  cy.get('form').within(($form) =>{

   //      cy.get('input').its('length').should('eq',6)
   //      cy.get('input[name="name"]').type('Way2automation')
   //      // cy.get('input').first().prev().then((label)=>{

   //      //   cy.log('Sibling element is : '+label.text())
   //      // })
   //      // cy.get("input[name='phone']").type('234574940')
   //      // cy.wait(5000)
   //      // cy.get('input',{timeout:3000}).last().type('jdfdfle')

   //    })

      cy.get('form').each($form => {

         cy.wrap($div).within(() => { 
            
            //cy.get('input').its('length').should('eq',6) 
            cy.get('input[name="name"]').type('Way2automation')
      
      })
     
       })

   })





})