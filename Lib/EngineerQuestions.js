const inquirer = require('inquirer');
const fs = require('fs');

const engineerquestions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    }

]
module.exports = engineerquestions ; 