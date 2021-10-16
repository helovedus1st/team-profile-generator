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
                return 'Name is required.'
            }

            if (isNaN(input)) {
                return 'The ID should be a number only.'
            }
            return true;
        }
    }
]
    
}