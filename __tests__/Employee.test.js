const Employee = require('../library/Employee')

describe('Engineer class', () => {
    describe('Engineer creation', () => {
        it('Create a engineer class' , () => {
            const obj = new Employee('Cj', 15123, "cj@email.com", "dominican");

            expect(obj instanceof Employee).toEqual(true);
        })
        it('return obj name' , () => {
            const obj = new Employee('Cj', 15123, "cj@email.com");
            
            expect(obj.getName()).toEqual('Cj');
        })
        it('return id' , () => {
            const obj = new Employee('Cj', 15123, "cj@email.com");

            expect(obj.getId()).toEqual(15123);
        })
        it('return email' , () => {
            const obj = new Employee('Cj', 15123, "cj@email.com");

            expect(obj.getEmail()).toEqual("cj@email.com");
        })
        it('return Github' , () => {
            const obj = new Employee('Cj', 15123, "cj@email.com");

            expect(obj.getRole()).toEqual("Employee");
        })
    })
})