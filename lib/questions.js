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
    }
]
EngineerQs : [
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
]
    
}