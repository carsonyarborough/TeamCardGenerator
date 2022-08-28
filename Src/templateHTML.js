// create cards for each employee / role

const Engineer = require('../Lib/Engineer');
const Manager = require('../Lib/Manager');
const Intern = require('../Lib/Intern');

// add manager icon  
const generateManagerCard = (manager) => {
    return `<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">${manager.name}, manager  \u00A0 <img src = "images/person-check.svg">
    </div>
    <div class="card-body">
      <h5 class="card-title">${manager.employeeID}  card title</h5>
      <p class="card-text"> ${manager.email}</p>
      <p class="card-text"> ${manager.office}</p>
    </div>`
}

const generateInternCard = (intern) => {
    return `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">${intern.name}, intern </div>
    <div class="card-body">
      <h5 class="card-title">${intern.employeeID} card title</h5>
      <p class="card-text"> ${intern.email}</p>
      <p class="card-text"> ${intern.school}</p>
    </div>`
}

const generateEngineerCard = (engineer) => {
    return `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">${engineer.name}</div>
    <div class="card-body">
      <h5 class="card-title">${engineer.employeeID} card title</h5>
      <p class="card-text"> ${engineer.email}</p>
      <p class="card-text">${engineer.username} </p>
    </div>`
}


// change all managers to respective variables 
const generateHTML = (teamMembers) => {
    const getManagers = teamMembers.filter(manager => manager.getRole() === 'Manager')
    .map(manager=> generateManagerCard(manager));
    const getEngineers = teamMembers.filter(engineer => engineer.getRole() === 'Engineer')
    .map(engineer=> generateEngineerCard(engineer));
    const getInterns = teamMembers.filter(manager => manager.getRole() === 'Intern')
    .map(manager=> generateInternCard(manager));
    
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Teammember Cards</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    </head>
    
    <body>
    
        <div class="jumbotron jumbotron-fluid">
            <h1 class="display-4">Team Members </h1>
            <div class="container">
    
    
                <div class="row row-cols-6">
                    <div class = 'my-2 mx-3'>
                        
                        ${getEngineers}
                    </div>
                    <div  class = 'my-2 mx-3'>
                        ${getManagers}
                    </div>
                    <div  class = 'my-2 mx-3'>
                    ${getInterns}
                    </div>
                </div>
            </div>
    
    
    
        </div>
        </div>
    </body>
    
    </html>`
}

module.exports = generateHTML;
