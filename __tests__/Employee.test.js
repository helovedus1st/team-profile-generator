const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('should create an object of the Employee class with a name, id, email, and role attribute', () => {
        const instance = new Employee('Bob', '123', 'bob@bobs.com');
        expect(typeof(instance)).toBe('object');
        expect(instance.name).toEqual('Bob');
        expect(instance.id).toEqual('123');
        expect(instance.email).toEqual('bob@bobs.com');
        expect(instance.getRole()).toEqual('Employee');
    });
});