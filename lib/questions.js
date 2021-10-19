module.exports = {

managerQs : [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (input) => {
            if (input === '') {
                return 'Name is required.'
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID number?",
        validate: (input) => {
            if (input === '') {
                return 'ID is required.'
            }

            if (isNaN(input)) {
                return 'The ID should be a number only.'
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        validate: (input) => {            
            if (input === '') {
                return 'An email address is required.'
            }

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true;
            } else {
                return 'You must enter a valid email address.'
            }
        }
    },
    {
        type: "input",
        name: "officeNum",
        message: "What is the manager's office number?",
        validate: (input) => {
            if (input === '') {
                return 'The office number is required.'
            }

            if (isNaN(input)) {
                return 'The ID should be a number only.'
            }
            return true;
        }
    }
],

engineerQs : [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: (input) => {
            if (input === '') {
                return 'Name is required.'
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID number?",
        validate: (input) => {
            if (input === '') {
                return 'ID is required.'
            }

            if (isNaN(input)) {
                return 'The ID should be a number only.'
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
        validate: (input) => {            
            if (input === '') {
                return 'An email address is required.'
            }

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true;
            } else {
                return 'You must enter a valid email address.'
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's Github username?",
        validate: (input) => {
            if (input === '') {
                return 'Github username is required.'
            }
            return true;
        }
    }
],

internQs : [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (input) => {
            if (input === '') {
                return 'Name is required.'
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's ID number?",
        validate: (input) => {
            if (input === '') {
                return 'ID is required.'
            }

            if (isNaN(input)) {
                return 'The ID should be a number only.'
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
        validate: (input) => {            
            if (input === '') {
                return 'An email address is required.'
            }

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true;
            } else {
                return 'You must enter a valid email address.'
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        validate: (input) => {
            if (input === '') {
                return 'An entry is required.'
            }
            return true;
        }
    }
],

continue : [
    {
        type: "list",
        name: "add",
        message: "Who would you like to add next?",
        choices: ['Engineer', "Intern", "I'm finished adding employees."]
    }
]
    
}