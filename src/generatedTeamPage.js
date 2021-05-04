// const Employee = require('./lib/Employee.js');

function generatedTeamPage(answers) {
  // console.log(answers[1]);
  if (answers = answers[0]) {
    managerCard(answers);
  } else if (answers = answers[1]) {
    engineerCard(answers);
  } else (answers = answers[2]) {
    internCard(answers);
  }

}
  function managerCard(answers) {
    console.log(answers);
  return `
  <div class="card border-secondary col-mb-4" style="max-width: 20rem;">
              <div class="card-header" style="background-color:turquoise">${answers[0].name}</div>
              <div class="card-body text-secondary" style="background-color:oldlace">
                <h5 class="card-title">${'Manager'}</h5>
                  <p class="card-text">${answers[0].id}</p>
                  <p class="card-text">${answers[0].email}</p>
                  <p class="card-text">'Office Number:'${answers[0].officeNumber}</p>
                  <a href="#" class="card-link">$</a>

              </div>
            </div>
`;
}

function engineerCard(answers) {
  return `
  <div class="card border-secondary col-mb-4" style="max-width: 20rem;">
              <div class="card-header" style="background-color:turquoise">${answers[1].name}</div>
              <div class="card-body text-secondary" style="background-color:oldlace">
                <h5 class="card-title">${'Engineer'}</h5>
                  <p class="card-text">${answers[1].id}</p>
                  <p class="card-text">${answers[1].email}</p>
                  <p class="card-text">'Github:'${answers[1].github}</p>
                  <a href="#" class="card-link">$</a>

              </div>
            </div>
`;
}

function internCard(answers) {
  return `
  <div class="card border-secondary col-mb-4" style="max-width: 20rem;">
              <div class="card-header" style="background-color:turquoise">${answers[2].name}</div>
              <div class="card-body text-secondary" style="background-color:oldlace">
                <h5 class="card-title">${'Intern'}</h5>
                  <p class="card-text">${answers[2].id}</p>
                  <p class="card-text">${answers[2].email}</p>
                  <p class="card-text">'Github:'${answers[2].school}</p>
                  <a href="#" class="card-link">$</a>

              </div>
            </div>
`;
}
//
};


module.exports = generatedTeamPage;