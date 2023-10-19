import 'cypress-xpath'

describe('File read and write',()=>{

    it.skip('Write user deatils into a file',()=>{
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/manager/list')
        //cy.xpath('//table/tbody').each(row=>{
        cy.xpath('//tbody/tr/td[1]').each(row=>{
            cy.writeFile('cypress/fixture.users1.txt',row.text())
        })
    })

    it('Read text file',()=>{
        // cy.fixture('userName.txt').then(userName=>{
        //     cy.log('userName: '+userName)
        // })
        cy.readFile('cypress/fixtures/userName.txt').then(fielContent=>{
            cy.log('fileContent :'+fielContent)
        })
    })
})