managerHTML = (obj) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
        <title>${obj.team}</title>
    </head>
    <body class="bg-light">
        <div class="jumbotron jumbotron-fluid page-header bg-danger p-5 text-center text-white">
            <h1 class="display-1"><strong>${obj.team}</strong></h1>
        </div>
        <div class="my-3 mx-5 d-flex flex-row flex-wrap is-centered justify-content-around">
            <div class="card text-white m-3 shadow border-primary">
                <div class="card-header bg-primary">
                    <h3>${obj.name}</h3>
                    <h5><i class="fa-solid fa-crown"></i> Manager</h5>
                </div>
                <div class="card-body bg-info bg-opacity-10">
                    <div class=" py-3">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID# ${obj.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
                        <li class="list-group-item">Office# ${obj.officeNum}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `}

engineerHTML = (obj) => {
    return `<div class="card text-white m-3 shadow border-primary">
    <div class="card-header bg-primary">
        <h3>${obj.name}</h3>
        <h5><i class="fa-solid fa-lightbulb"></i> Engineer</h5>
    </div>
    <div class="card-body bg-info bg-opacity-10">
        <div class=" py-3">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID# ${obj.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
            <li class="list-group-item">Office# ${obj.github}</li>
            </ul>
        </div>
    </div>
</div>`}

internHTML = (obj) => {
    return `<div class="card text-white m-3 shadow border-primary">
    <div class="card-header bg-primary">
        <h3>${obj.name}</h3>
        <h5><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
    </div>
    <div class="card-body bg-info bg-opacity-10">
        <div class=" py-3">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID# ${obj.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
            <li class="list-group-item">Office# ${obj.school}</li>
            </ul>
        </div>
    </div>
</div>`}

closingHTML = () => {
    return `
    </div>

</body>
</html>`
}

module.exports = {
    manager: managerHTML,
    engineer: engineerHTML,
    intern: internHTML,
    closing: closingHTML,
}