 var should = require('chai').should()
 var expect = require('chai').expect
 var assert = require('chai').assert
 const{isElementPresent} = require('./validations.js')
 log = console.log

 before(()=>{

    log('Before Hook')
 })

 after(()=>{

    log('After Hook')
 })

 beforeEach(()=>{

    log('Before Each Hook')
 })

 afterEach(()=>{

    log('After Each Hook')
 })
 describe('Mocha validations', ()=>{

    let name = 'Joyce'

    it('Validate through should', ()=>{

       name.should.equal('Joyce')
       //name.should.equal('joyce')
       name.should.have.lengthOf(5)
       //name.should.have.lengthOf(6)
       log(isElementPresent())

       isElementPresent().should.be.true
    })

    it.skip('Validate through expect', ()=>{

        expect(name).to.equal('Joyce')
        expect(name).to.have.lengthOf(5)
        //expect(name).to.have.lengthOf(6)
        expect(isElementPresent()).to.true

    })

    it('Validate through assert', ()=>{

        assert.equal(name,'Joyce')
        assert.lengthOf(name,5)
        //assert.lengthOf(name,6)
        assert.equal(isElementPresent(),true)

    })
 })

 describe.skip('Mocha validations2', ()=>{

    let name = 'Joyce'

    it('Validate through should2', ()=>{

       name.should.equal('Joyce')
       //name.should.equal('joyce')
       name.should.have.lengthOf(5)
       //name.should.have.lengthOf(6)
       log(isElementPresent())

       isElementPresent().should.be.true
    })

    it.skip('Validate through expect2', ()=>{

        expect(name).to.equal('Joyce')
        expect(name).to.have.lengthOf(5)
        //expect(name).to.have.lengthOf(6)
        expect(isElementPresent()).to.true

    })

    it('Validate through assert2', ()=>{

        assert.equal(name,'Joyce')
        assert.lengthOf(name,5)
        //assert.lengthOf(name,6)
        assert.equal(isElementPresent(),true)

    })
 })