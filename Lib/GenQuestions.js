const inquirer = require('inquirer');
const fs = require('fs');

const employeequestions = [
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
    }

]
 module.exports = employeequestions ;
