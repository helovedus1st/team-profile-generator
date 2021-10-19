const fs = require('fs');
const open = require('open');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./lib/questions');
const htmlCreate = require('./lib/htmlCreate')

const allClassified = [];
const managerObj = [];
const engineerObjs = [];
const internObjs = [];


intake = () => {
    inquirer.prompt(questions.managerQs)
    .then(({team, name, id, email, officeNum}) => {
        const managerInstance = new Manager(team, name, id, email, officeNum);
        managerObj.push(managerInstance);
        console.log(managerObj);
        fs.writeFile("manager.html", htmlCreate.manager(managerInstance), (err) => {
            if(err) {
              throw err;
            };
            console.log("Your manager has been constructed!");
          });
          open("manager.html");

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
    // fs.writeFile("manager.html", htmlCreate.manager(managerObj), (err) => {
    //   if(err) {
    //     throw err;
    //   };
    //   console.log("Your manager has been constructed!");
    // });
    // open("manager.html");
    
    // fs.writeFile("engineers.html", htmlCreate.engineer(engineerObjs), (err) => {
    //     if(err) {
    //       throw err;
    //     };
    //     console.log("Your engineers have been constructed!");
    //   });
    //   open("engineers.html");
      
    // fs.writeFile("intern.html", htmlCreate.intern(internObjs), (err) => {
    //     if(err) {
    //       throw err;
    //     };
    //     console.log("Your interns have been constructed!");
    //   });
    //   open("intern.html");

    //   fs.writeFile("closing.html", htmlCreate.closing(), (err) => {
    //     if(err) {
    //       throw err;
    //     };
    //     console.log("Your closing has been constructed!");
    //   });
    //   open("intern.html");


    internObjs.push(allClassified);
    engineerObjs.push(allClassified);
    managerObj.push(allClassified);


    console.log(internObjs, engineerObjs, managerObj);
    console.log(allClassified);

};

intake();