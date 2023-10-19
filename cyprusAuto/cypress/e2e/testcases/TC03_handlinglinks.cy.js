/// <reference types="cypress"/>
describe('Check Links',()=>{

    // it('Verify Links',()=>{
  
    //     cy.visit('http://qa.way2automation.com')
    //     cy.get('a').contains('Signin').click()
    //     cy.get('.text_popup').should('contain.text','Dont Have an Account?')

    //     cy.get('a').its('length').then((elelength) =>{

    //       cy.log(elelength)

    //     })

        // it('Verify Links',()=>{
  
        //   cy.visit('https://www.way2automation.com/')
        //   cy.get('a').contains('Register').click({force: true})
        //   //cy.get('a').contains('Register').click({ waitForAnimations: false })
        //   cy.get('.elementor-widget-container').should('contain.text','CLUB')
  
        //   cy.get('a').its('length').then((elelength) =>{
  
        //     cy.log(elelength)
  
        //   })

          it('Verify Links',()=>{

            cy.log("Execution started")
  
            cy.visit('https://en.wikipedia.org/wiki/Main_Page')
            cy.get('a').contains('Commons').click({force: true})
            // //cy.get('a').contains('Register').click({ waitForAnimations: false })
            cy.origin('https://commons.wikimedia.org', () => {

              cy.get('.mainpage-welcome-sitename').should('contain.text','Commons')

              cy.get('a').its('length').then((elelength) =>{
    
                  cy.log(elelength)
        
                })

                cy.get('.vector-menu-content').eq(5).find('a').its('length').then((elelength) =>{
    
                  cy.log(elelength)
        
                })

                cy.get('.vector-menu-content').eq(5).find('a').then((linktext) =>{

                  cy.log(linktext.text())

                })
    

            })

            cy.log("Execution finished")
            
            // cy.get('a').its('length').then((elelength) =>{
    
            //   cy.log(elelength)
    
            // })
        
       
  
  })

 
  })

  

  



 

