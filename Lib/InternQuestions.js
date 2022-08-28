const inquirer = require('inquirer');
const fs = require('fs');

const internquestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name:'employeeID'
    },
    {
        type: 'input',
        message: 'What is your school?',
        name: 'school'
    }

]
module.exports = internquestions ; 