//define and export manager class as an extension of employee type
const Employee = require("./Employee")

class Mgr extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber
    }

}

module.exports = Mgr