import LandingPage from '../support/Pages/landingPage'
import BasePage from '../support/Pages/basePage'

describe('Landing Page Tests', ()=>{

    // it('Verify Bank Name on Landing Page', ()=>{

    //     LandingPage.invokeApp()
    //     LandingPage.verifyBankName()
    //     LandingPage.verifyButtonsOnLandingPage()

    // })

    before('Invoke Application', ()=>{
        LandingPage.invokeApp()
    })

    it('Verify bank lable on landing page', ()=>{
        LandingPage.verifyBankName()
    })

    it('verify Home button on Landing Page', ()=>{
        BasePage.verifyElementWithText('Home')
       
    })

   
    it('verify Customer Login button on Landing Page', ()=>{
        BasePage.verifyElementWithText('Customer Login')

    })
   
    it('verify Bank Manager Login button on Landing Page', ()=>{
        BasePage.verifyElementWithText('Bank Manager Login')

    })
})