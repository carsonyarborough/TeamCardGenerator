const GeneralEmployee = require('../Lib/GeneralEmployee')
describe('GeneralEmployee', () => {
    describe('start',()=>{      //lines 4-7 copy for each method and name is replaced with ID, email, and role
        it("should return a name", ()=>{
            const name = 'Carson';
            const obj = new GeneralEmployee(name, "carson@email.com", 9898)
            expect (obj.getName()).toBe(name);
        })           // create three other tests for each method in this class  
    })
})