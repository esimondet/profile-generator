const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { resolve } = require('path');
const { rejects } = require('assert');
const buildPage = require('../src/page-template');

//empty arrays to store inquirer prompts
var manager = null;
var engineers = [];
var interns = [];

const managerPrompts = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Hello Manager, what is your name?',
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is your employee ID?',
        validate: managerIdInput => {
            if (managerIdInput) {
                return true;
            } else {
                console.log('Please enter your employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your email address?',
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'What is your office number?',
        validate: managerOfficeInput => {
            if (managerOfficeInput) {
                return true;
            } else {
                console.log('Please enter your office number!');
                return false;
            }
        }
    }
]

const engineerPrompts = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is your engineer's name?",
        validate: engineerNameInput => {
            if (engineerNameInput) {
                return true;
            } else {
                console.log("Please enter your engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is your engineer's employee ID?",
        validate: engineerIdInput => {
            if (engineerIdInput) {
                return true;
            } else {
                console.log("Please enter your engineer's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is your engineer's email address?",
        validate: engineerEmailInput => {
            if (engineerEmailInput) {
                return true;
            } else {
                console.log("Please enter your engineer's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is your engineer's github?",
        validate: engineerGithubInput => {
            if (engineerGithubInput) {
                return true;
            } else {
                console.log("Please enter your engineer's github?!");
                return false;
            }
        }
    }
]

const internPrompts = [
    {
        type: 'input',
        name: 'internName',
        message: "What is your intern's name?",
        validate: internNameInput => {
            if (internNameInput) {
                return true;
            } else {
                console.log("Please enter your intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is your intern's employee ID?",
        validate: internIdInput => {
            if (internIdInput) {
                return true;
            } else {
                console.log("Please enter your intern's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is your intern's email address?",
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log("Please enter your intern's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is your intern's email address?",
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log("Please enter your intern's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is your intern's school?",
        validate: internSchoolInput => {
            if (internSchoolInput) {
                return true;
            } else {
                console.log("Please enter your intern's school!");
                return false;
            }
        }
    },
]

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'index.html created in /dist folder!'
            });
        });
    });
}

//recursive function to allow for multiple engineers or interns
const teamBuild = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamList',
            message: 'Add an employee, or choose Finish.',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ])
        .then(teamCheck => {
            if (teamCheck.teamList === 'Engineer') {
                return inquirer.prompt(engineerPrompts)
                    .then(responses => {
                        //store new Engineer in existing global array
                        engineers.push(new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, 'Engineer', responses.engineerGithub));
                        teamBuild();
                    });
            } else if (teamCheck.teamList === 'Intern') {
                return inquirer.prompt(internPrompts)
                    .then(responses => {
                        //store new Intern in existing global array
                        interns.push(new Intern(responses.internName, responses.internId, responses.internEmail, 'Intern', responses.internSchool));
                        teamBuild();
                    });
            } else {
                //once 'Finish' is chosen from the list prompt, use buildPage() with user entered parameters 
                return writeFile(buildPage(manager, engineers, interns));
            }
        });
}

const promptManager = () => {
    //promptManager runs first and only once
    return inquirer.prompt(managerPrompts)
        .then(responses => {
            manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, 'Manager', responses.managerOffice);
            return teamBuild();
        }).catch((error) => {
            console.log(error);
        });
}

module.exports = promptManager;