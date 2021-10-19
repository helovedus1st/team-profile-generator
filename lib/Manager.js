const Employee = require('./Employee');

class Manager extends Employee {
    constructor(team, name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        this.team = team;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber () {
        return this.officeNum;
    }

    getTeam () {
        return this.team;
    }
}

module.exports = Manager;