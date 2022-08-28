const inquirer = require('inquirer');
const fs = require('fs');

const internquestions = [
    {
        type: 'input',
        message: 'What is your school?',
        name: 'school'
    }

]
module.exports = internquestions ; 