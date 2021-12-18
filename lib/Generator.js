const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

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
            return inquirer.prompt(engineerPrompts);
        } else if (teamCheck.teamList === 'Intern') {
            return inquirer.prompt(internPrompts);
        } else {
            return;
        }
    })
}

const promptManager = profileData => {
    return inquirer.prompt(managerPrompts)
        .then(() => {
            return teamBuild();
        }).catch((error) => {
            console.log(error);
        });
}

module.exports = promptManager;