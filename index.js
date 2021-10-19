const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./lib/questions');

const allClassified = [];
const managerObj = [];
const engineerObjs = [];
const internObjs = [];


intake = () => {
    inquirer.prompt(questions.managerQs)
    .then(({name, id, email, officeNum}) => {
        const managerInstance = new Manager(name, id, email, officeNum);
        managerObj.push(managerInstance);
        console.log(managerObj);
        intakeContinue();
    });
};

intakeEngineer = () => {
    inquirer.prompt(questions.engineerQs)
    .then(({name, id, email, github}) => {
        const engineerInstance = new Engineer(name, id, email, github);
        engineerObjs.push(engineerInstance);
        intakeContinue(); 
    })
}

intakeIntern = () => {
    inquirer.prompt(questions.internQs)
    .then(({name, id, email, school}) => {
        const internInstance = new Intern(name, id, email, school);
        internObjs.push(internInstance);
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
            default: console.log(response.add); console.log('default triggered');
        }
    })
}

createTeamPage = () => {
    // fs.writeFile("aboutus.html",team, (err) => {
    //   if(err) {
    //     throw err;
    //   };
    //   console.log("Your team has been constructed!");
    // });
    // open("team.html");

    internObjs.push(allClassified);
    engineerObjs.push(allClassified);
    managerObj.push(allClassified);

    console.log(internObjs, engineerObjs, managerObj);
    console.log(allClassified);

};

intake();