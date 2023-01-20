
import { expect } from "chai"
import { request } from "supertest";
//Import needed modules to test it
import server from "src/server";

describe('Test suite example', () => {
    let tester;

    // If you need to run something before tests
    before(() => {
      //Antes de todo, se ejecutará la inicialización si es necesaria
      //tester = new x(y,z);
    })
  
    describe('Should pass if is invalid', () => {
        it('Invalid expected', () => {
            assert.throws(new Error('Ha fallado'), Error);
        })
    })

    describe('Should pass if is valid', () => {
        it('Valid expected', () => {
            expect(2).to.equal(2);
        })
    })

})