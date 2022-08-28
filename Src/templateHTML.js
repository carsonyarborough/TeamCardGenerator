// create cards for each employee / role

const Engineer = require('../Lib/Engineer');
const Manager = require('../Lib/Manager');
const Intern = require('../Lib/Intern');

// add manager icon  
const generateManagerCard = (manager) => {
    return `<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">${manager.name}, manager  \u00A0
    </div>
    <div class="card-body">
      <h5 class="card-title">${manager.employeeID}  card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>`
}