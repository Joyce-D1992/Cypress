import landingPage from "../../support/Pages/landingPage"
import basePage  from "../../support/Pages/basePage"

describe('Bank Manager HomePage Tests', ()=>{

    beforeEach('Invoke application and Login as Bank Manager', ()=>{

       landingPage.invokeApp()
       landingPage.loginAsBankManager()
    })
})