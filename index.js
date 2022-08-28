const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHTML = require('./Src/templateHTML');

const employeequestions = require('./Lib/GenQuestions.js');
const employeetype = require('./Lib/MenuQuestions.js');

const internquestions = require('./Lib/InternQuestions.js');
const managerquestions = require('./Lib/ManagerQuestions');
const engineerquestions = require('./Lib/EngineerQuestions.js');

const GeneralEmployee = require('./Lib/GeneralEmployee.js');
const Engineer = require('./Lib/Engineer.js');
const Intern = require('./Lib/Intern.js');
const Manager = require('./Lib/Manager.js');

let teamMembers = [];

inquirer
    .prompt(managerquestions)
    .then((response) => {
        const managerOne = new Manager(response.name, response.employeeID, response.office, response.email)
        teamMembers.push(managerOne); menu()} )

        const menu = () => {
            inquirer
                .prompt(employeetype)
                .then(choice => {
                    console.log(choice)
                    if (choice.employeetitle === 'engineer') {
                        inquirer
                            .prompt(engineerquestions)
                            .then(response => {
                                const engineerOne = new Engineer(response.name, response.employyeeID, response.username, response.email)
                                teamMembers.push(engineerOne)
                                menu();
                            })
                    }       // end of if 
                    else if (choice.employeetitle === 'intern') {
                        inquirer
                            .prompt(internquestions)
                            .then(response => {
                                const internOne = new Intern(response.name, response.employeeID, response.school, response.email)
                                teamMembers.push(internOne)
                                menu();
                            })
                    }       // end of else if 

                    else {
                        var template = generateHTML(teamMembers)
                        fs.writeFile('index.html', template, (err) =>
                            err ? console.log(err) : console.log('response written'))
                    } return
                }) // end of promise for employee type
        }      //end of menu function 

