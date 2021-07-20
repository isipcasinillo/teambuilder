const Manager = require('../library/Manager')

describe('Manager class', () => {
    describe('Manager creation', () => {
        it('Create a manager class' , () => {
            const obj = new Manager('Cj', 15123, "cj@email.com");

            expect(obj instanceof Manager).toEqual(true);
        })
        it('return obj name' , () => {
            const obj = new Manager('Cj', 15123, "cj@email.com");

            expect(obj.getName()).toEqual('Cj');
        })
        it('return id' , () => {
            const obj = new Manager('Cj', 15123, "cj@email.com");

            expect(obj.getId()).toEqual(15123);
        })
        it('return email' , () => {
            const obj = new Manager('Cj', 15123, "cj@email.com");

            expect(obj.getEmail()).toEqual("cj@email.com");
        })
        it('return room number' , () => {
            const obj = new Manager('Cj', 15123, "cj@email.com", 5123);

            expect(obj.officenumber).toEqual(5123);
        })
    })
})