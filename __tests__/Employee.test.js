const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('should create an object of the Employee class with a name, id, email, and role attribute', () => {
        const instance = new Employee('Sue', '123', 'sue@bobs.com');
        expect(typeof(instance)).toBe('object');
        expect(instance.name).toEqual('Sue');
        expect(instance.id).toEqual('123');
        expect(instance.email).toEqual('sue@bobs.com');
        expect(instance.getRole()).toEqual('Employee');
    });
});