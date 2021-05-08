let html = `<!DOCTYPE html>
<html lang="en">
    
<head>
 <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    
    <title>Bootstrap Utilities</title>
</head>
    
<body>
  <div class="min-vh-100 d-flex align-items-center bg-dark">
    <section class="w-100 row justify-content-center">
      <div class="col-12 col-md-12 col-lg-6">  <!-- col-lg-5 -->
        <h1 class="display-3 text-center text-white">My Team</h1>
        
        <div class="employee row row-cols-1 row-cols-md-3">`

function generatedTeamPage(answers) {

  answers.forEach(employee => {
    switch (employee.getRole()) {
      case "Engineer":
        engineerCard(employee);
        break;
      case "Intern":
        internCard(employee);
        break;
      default:
        managerCard(employee);
    }
  })
  // console.log(answers[1]);
  
return html += `</div>


</div>
</section>

</div>

</body>

</html>`
}
  function managerCard(answers) {
    // console.log(answers);
  html += `
  <div class="card border-secondary col-mb-4" style="max-width: 25rem;">
              <div class="card-header" style="font-weight:bolder; background-color:turquoise"><h2>${answers.name}</h2></div>
              <div class="card-body text-secondary" style="background-color:oldlace">
                <h5 class="card-title" style="font-weight:bolder">Manager     <i class="fab fa-black-tie"></i></h5>
                  <p class="card-text" style="font-weight:bolder">ID: ${answers.id}</p>
                  <p class="card-text">Email: ${answers.email}</p>
                  <p class="card-text">Office Number: ${answers.officeNumber}</p>
                  <a href="#" class="card-link"></a>

              </div>
            </div>
`;
}

function engineerCard(answers) {
  html += `
  <div class="card border-secondary col-mb-4" style="max-width: 25rem;">
              <div class="card-header" style="font-weight:bolder; background-color:turquoise"><h2>${answers.name}</h2></div>
              <div class="card-body text-secondary" style="background-color:oldlace">
                <h5 class="card-title" style="font-weight:bolder">Engineer     <i class="fas fa-brain"></i></h5>
                  <p class="card-text" style="font-weight:bolder">ID: ${answers.id}</p>
                  <p class="card-text">Email: ${answers.email}</p>
                  <p class="card-text">Github: ${answers.github}</p>
                  <a href="#" class="card-link"></a>

              </div>
            </div>
`;
}

function internCard(answers) {
  html += `
  <div class="card border-secondary col-mb-4" style="max-width: 25rem;">
              <div class="card-header" style="font-weight:bolder; background-color:turquoise"><h2>${answers.name}</h2></div>
              <div class="card-body text-secondary" style="background-color:oldlace">
                <h5 class="card-title" style="font-weight:bolder">Intern     <i class="fas fa-baby"></i></h5>
                  <p class="card-text" style="font-weight:bolder">ID: ${answers.id}</p>
                  <p class="card-text">Email: ${answers.email}</p>
                  <p class="card-text">School: ${answers.school}</p>
                  <a href="#" class="card-link"></a>

              </div>
            </div>
`;
}
console.log('success');
;


module.exports = generatedTeamPage;