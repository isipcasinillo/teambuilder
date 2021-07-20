const Intern = require('../library/Intern')

describe('Manager class', () => {
    describe('Manager creation', () => {
        it('Create a manager class' , () => {
            const obj = new Intern('Cj', 15123, "cj@email.com", "dominican");

            expect(obj instanceof Intern).toEqual(true);
        })
        it('return obj name' , () => {
            const obj = new Intern('Cj', 15123, "cj@email.com");
            
            expect(obj.getName()).toEqual('Cj');
        })
        it('return id' , () => {
            const obj = new Intern('Cj', 15123, "cj@email.com");

            expect(obj.getId()).toEqual(15123);
        })
        it('return email' , () => {
            const obj = new Intern('Cj', 15123, "cj@email.com");

            expect(obj.getEmail()).toEqual("cj@email.com");
        })
        it('return school' , () => {
            const obj = new Intern('Cj', 15123, "cj@email.com", "dominican");

            expect(obj.getSchool()).toEqual("dominican");
        })
    })
})