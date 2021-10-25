const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('should create an object of the Manager class with a name, id, email, officeNum, and role attribute', () => {
        const instance = new Manager("Bob's Hardware", 'Bob', '456', 'bob@bobs.com', '567');
        expect(typeof(instance)).toBe('object');
        expect(instance.team).toEqual("Bob's Hardware");
        expect(instance.name).toEqual('Bob');
        expect(instance.id).toEqual('456');
        expect(instance.email).toEqual('bob@bobs.com');
        expect(instance.officeNum).toEqual('567');
        expect(instance.getRole()).toEqual('Manager');
    });
});