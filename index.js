const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./lib/questions')


intake = () => {
    inquirer.prompt(questions.managerQs)
    .then(({name, id}) => {
        const manager = new Manager(name, id);
        console.log(manager)
    });
};

intake();