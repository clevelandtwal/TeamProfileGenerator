//define and export engineer class as employee type
const Employee = require("./Employee")

class Eng extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer employee"
    }

}

module.exports = Eng