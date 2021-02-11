//link files and also to define the variables used
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Mgr = require("./lib/Manager");
const Eng = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRender");

const allEmployees = []

//start function to run program and define employee
function programInit() {
    function newTeam(){
        inquirer.prompt([
            {
            type: "list",
            name: "employeeRole",
            message: "Which type of employee would you like to add?",
            choices: [
                "manager",
                "engineer employee",
                "intern",
                "none"
            ]
            }
        ]).then(answers =>{
        switch(answers.employeeRole) {
            case "manager":
                addManager();
            break
            case "engineer":
                addEngineer();
            break
            case "intern":
                addIntern();
            break
            default:
                createTeam();
        }
            })
    };


//define the manager
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a name."
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the ID for your manager?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter an ID."
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email address?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter an email address."
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office phone number?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter an office phone number."
                }
            }
        ]).then(answers => {
            const manager = new Mgr (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            allEmployees.push(manager)
            newTeam();
    })};

//define the intern
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's first name?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a first name for your intern."
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the ID for your intern?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter an ID for your intern."
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email address?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter an email address."
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school name?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter your intern's school name."
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            allEmployees.push(intern)
            newTeam();
    })};


 //define engineer employee
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a name for your engineer."
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the ID for your engineer employee?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter your engineer employee's ID."
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your employee's email address?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter your engineer employee's email address."
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your employee's Github account?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter your engineer employee's Github account."
                }
            }
        ]).then(answers => {
            const engineer = new Eng (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            allEmployees.push(engineer)
            newTeam();
        })
    }

//function that creates team
    function createTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(allEmployees), "utf-8");
      }

newTeam();    
}

programInit()