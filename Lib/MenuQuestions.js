const inquirer = require('inquirer');
const fs = require('fs');

const employeetype = [
    {
        type: 'list',
        message: 'What is your role?',
        name: 'employeetitle',
        choices: ['engineer', 'intern', 'neither'],

    }
]
module.exports = employeetype; 