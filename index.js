const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./lib/questions')


intake = () => {
    inquirer.prompt(questions.managerQs)
    .then(({name, id, email, officeNum}) => {
        const manager = new Manager(name, id, email, officeNum);
        console.log(manager);
        // now ask who they wanna create

    });
};

intakeContinue = () => {
    inquirer.prompt(questions.continue)
    .then((response) => {
        switch (response.continue) {
            case "Engineer":
                intakeEngineer();
                break;
            case "Intern":
                intakeIntern();
                break;
            case "I'm finished adding employees.":
                console.log('Thank you! Your team web page is being created.')
                createTeamPage();
                break;
        }
    })
}

createTeamPage = () => {

}

intake();