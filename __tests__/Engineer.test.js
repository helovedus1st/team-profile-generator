const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('should create an object of the Engineer class with a name, id, email, github, and role attribute', () => {
        const instance = new Engineer('Tom', '234', 'tom@bobs.com', 'tommyboy');
        expect(typeof(instance)).toBe('object');
        expect(instance.name).toEqual('Tom');
        expect(instance.id).toEqual('234');
        expect(instance.email).toEqual('tom@bobs.com');
        expect(instance.github).toEqual('tommyboy');
        expect(instance.getRole()).toEqual('Engineer');
    });
});