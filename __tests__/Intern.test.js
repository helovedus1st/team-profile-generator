const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('should create an object of the Intern class with a name, id, email, school, and role attribute', () => {
        const instance = new Intern('Stu', '345', 'stu@ucf.edu', 'UCF');
        expect(typeof(instance)).toBe('object');
        expect(instance.name).toEqual('Stu');
        expect(instance.id).toEqual('345');
        expect(instance.email).toEqual('stu@ucf.edu');
        expect(instance.school).toEqual('UCF');
        expect(instance.getRole()).toEqual('Intern');
    });
});