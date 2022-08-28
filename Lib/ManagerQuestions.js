const inquirer = require('inquirer');
const fs = require('fs');

const managerquestions = [
    {
        type: 'input',
        message: 'What is your office?',
        name: 'office'
    }
 

]

module.exports = managerquestions ;