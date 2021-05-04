// const Employee = require('./lib/Employee.js');

function generatedTeamPage(answers) {
  return `
  <div class="card border-secondary col-mb-4" style="max-width: 20rem;">
              <div class="card-header" style="background-color:turquoise">${answers.managerName}</div>
              <div class="card-body text-secondary" style="background-color:oldlace">
                <h5 class="card-title">${'Manager'}</h5>
                  <p class="card-text">${answers.managerId}</p>
                  <p class="card-text">${answers.managerEmail}</p>
                  <p class="card-text"></p>
                  <a href="#" class="card-link">$</a>

              </div>
            </div>

`;
}

module.exports = generatedTeamPage;
