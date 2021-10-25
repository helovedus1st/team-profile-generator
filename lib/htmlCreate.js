htmlCreate = (employees) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
        <title>${employees[0].team}</title>
    </head>
    <body class="bg-light">
        <div class="jumbotron jumbotron-fluid page-header bg-danger p-5 text-center text-white">
            <h1 class="display-1"><strong>${employees[0].team}</strong></h1>
        </div>
        <div class="my-3 mx-5 d-flex flex-row flex-wrap is-centered justify-content-around">
            <div class="card text-white m-3 shadow border-primary">
                <div class="card-header bg-primary">
                    <h3>${employees[0].name}</h3>
                    <h5><i class="fa-solid fa-crown"></i> Manager</h5>
                </div>
                <div class="card-body bg-info bg-opacity-10">
                    <div class=" py-3">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID# ${employees[0].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employees[0].email}">${employees[0].email}</a></li>
                        <li class="list-group-item">Office# ${employees[0].officeNum}</li>
                        </ul>
                    </div>
                </div>
            </div>

            ${employees.map(employee => {
                if(employee.getRole() === "Intern") {
                     return `<div class="card text-white m-3 shadow border-primary">
                     <div class="card-header bg-primary">
                         <h3>${employee.name}</h3>
                         <h5><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
                     </div>
                     <div class="card-body bg-info bg-opacity-10">
                         <div class=" py-3">
                             <ul class="list-group list-group-flush">
                             <li class="list-group-item">ID# ${employee.id}</li>
                             <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                             <li class="list-group-item">School: ${employee.school}</li>
                             </ul>
                         </div>
                     </div>
                 </div>`
                 }
                 if(employee.getRole() === "Engineer") {
                     return `<div class="card text-white m-3 shadow border-primary">
                     <div class="card-header bg-primary">
                         <h3>${employee.name}</h3>
                         <h5><i class="fa-solid fa-lightbulb"></i> Engineer</h5>
                     </div>
                     <div class="card-body bg-info bg-opacity-10">
                         <div class=" py-3">
                             <ul class="list-group list-group-flush">
                             <li class="list-group-item">ID# ${employee.id}</li>
                             <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                             <li class="list-group-item">Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
                             </ul>
                         </div>
                     </div>
                 </div>`
                 }
            })}
            
        </div>

    </body>
    </html>`
}

module.exports = htmlCreate;