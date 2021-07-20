const Engineer = require('../library/Engineer')

describe('Engineer class', () => {
    describe('Engineer creation', () => {
        it('Create a engineer class' , () => {
            const obj = new Engineer('Cj', 15123, "cj@email.com", "dominican");

            expect(obj instanceof Engineer).toEqual(true);
        })
        it('return obj name' , () => {
            const obj = new Engineer('Cj', 15123, "cj@email.com");
            
            expect(obj.getName()).toEqual('Cj');
        })
        it('return id' , () => {
            const obj = new Engineer('Cj', 15123, "cj@email.com");

            expect(obj.getId()).toEqual(15123);
        })
        it('return email' , () => {
            const obj = new Engineer('Cj', 15123, "cj@email.com");

            expect(obj.getEmail()).toEqual("cj@email.com");
        })
        it('return Github' , () => {
            const obj = new Engineer('Cj', 15123, "cj@email.com", "ejGithub");

            expect(obj.getGithub()).toEqual("ejGithub");
        })
    })
})