const fs = require('fs');
const open = require('open');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./lib/questions');
const htmlCreate = require('./lib/htmlCreate')

const allInstances = [];

intake = () => {
    inquirer.prompt(questions.managerQs)
    .then(({team, name, id, email, officeNum}) => {
        const managerInstance = new Manager(team, name, id, email, officeNum);
        managerInstance.role = managerInstance.getRole();
        allInstances.push(managerInstance);
        intakeContinue();
    });
};

intakeEngineer = () => {
    inquirer.prompt(questions.engineerQs)
    .then(({name, id, email, github}) => {
        const engineerInstance = new Engineer(name, id, email, github);
        engineerInstance.role = engineerInstance.getRole();
        allInstances.push(engineerInstance);
        intakeContinue(); 
    })
}

intakeIntern = () => {
    inquirer.prompt(questions.internQs)
    .then(({name, id, email, school}) => {
        const internInstance = new Intern(name, id, email, school);
        internInstance.role = internInstance.getRole();
        allInstances.push(internInstance);
        intakeContinue(); 
    })
}

intakeContinue = () => {
    inquirer.prompt(questions.continue)
    .then((response) => {
        switch (response.add) {
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
            default: console.log(response.add); console.log('error');
        }
    })
}

createTeamPage = () => {    
    console.log(allInstances);
        fs.writeFile(`./dist/aboutus.html`, htmlCreate(allInstances), (err) => 
            err ? console.error(err) : console.log("Your new team web page has been constructed!"));

            open("./dist/aboutus.html");
};

intake();