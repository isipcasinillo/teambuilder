const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')
const Manager = require('./library/Manager');
const { rejects } = require('assert');

employeelist = [];

const questionlist = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter employee name: '
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter employee id: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email: '
    },
    {
        type: 'input',
        name: 'role',
        message: 'Enter employee role: '
    }
];

function questionlist_manager () {
    inquirer.prompt([...questionlist,
    {
        type: 'input',
        name: 'officenumber',
        message: 'Enter manager office number: '
    }
    ])
    .then((data) => {
        const manager_new = new Manager(data.name, data.id, data.email, data.officenumber);
        createEmployee(manager_new);
        askQuestionAgain();
    })
}

function questionlist_engineer () {
    inquirer.prompt([...questionlist,
    {
        type: 'input',
        name: 'officenumber',
        message: 'Enter GitHub link: '
    }
    ])
    .then((data) => {
        const engineer_new = new Engineer(data.name, data.id, data.email, data.officenumber);
        createEmployee(engineer_new);
        askQuestionAgain();
        
    })
    
}

function questionlist_intern () {
    inquirer.prompt([...questionlist,
    {
        type: 'input',
        name: 'school',
        message: 'Enter School: '
    }
    ])
    .then((data) => {
        const intern_new = new Intern(data.name, data.id, data.email, data.school);
        createEmployee(intern_new);
        askQuestionAgain();
        
    })
    
}

const askQuestionAgain = () => {
    inquirer.prompt(
    {
        type: 'list',
        name: 'role',
        message: 'Which roles to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'Complete Employee List']
    },
    ).then(value => {
        switch(value.role) {
            case 'Manager':
                questionlist_manager();
                break;
            case 'Engineer':
                questionlist_engineer();
                break;
            case 'Intern':
                questionlist_intern();
                break;
            case 'Complete Employee List':
                finishHtml();
                break;
        }
           
    })   
}



const createEmployee = (new_employee) => {
    const name = new_employee.getName();
    const id = new_employee.getId();
    const email = new_employee.getEmail();
    const role = new_employee.getRole();
    
    switch(role) {
        case 'Manager':
            const officenumber = new_employee.officenumber;
            data = 
            `<div class="card">
                <div class="card-header">
                    <div>${name}</div>
                    <div>${role}</div>
                </div>
                <div class="card-body">
                    <div>ID: <span>${id}</span></div>
                    <div>Email: <span class="email">${email}</span></div>
                    <div>Office number: <span>${officenumber}</span></div>
                </div>
             </div>
            `
        break;
        case 'Engineer':
            const github = new_employee.getGithub();
            data = 
            `<div class="card">
                <div class="card-header">
                    <div>${name}</div>
                    <div>${role}</div>
                </div>
                <div class="card-body">
                    <div>ID: <span>${id}</span></div>
                    <div>Email: <span class="email">${email}</span></div>
                    <div>GitHub: <span>${github}</span></div>
                </div>
             </div>
            `
        break;
        case 'Intern':
            const school = new_employee.getSchool();
            data = 
            `<div class="card">
                <div class="card-header">
                    <div>${name}</div>
                    <div>${role}</div>
                </div>
                <div class="card-body">
                    <div>ID: <span>${id}</span></div>
                    <div>Email: <span class="email">${email}</span></div>
                    <div>School: <span>${school}</span></div>
                </div>
             </div>`
        break;
    }
    fs.appendFile("./dist/team.html", data, function (err) {
        if (err) {
            return rejects(err)
        };
    })

}


const StartHtml = () => {
    data = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <style>
        body {
            background-color: rgb(152, 152, 167);
            display:flex;
        }
        .card {
            border-radius: 20px;
            height: 300px;
            width: 300px;
            background-color: rgb(218, 218, 218);
            margin: 10px;
        }
        .card-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 70px;
            border-radius: 20px 20px 0 0;
            background-color: rgb(245, 52, 35);
        }
        .card-body {
            display: flex;
            flex-direction: column;
            margin: 20px 10px 0px 10px;
            font-size: 20px;
        }
        .email {
            font-size: 20px;
            color: blue;
        }
    </style>
    <body>`
    fs.appendFile("./dist/team.html", data, function (err) {
        if (err) {
            return rejects(err)
        };
    })
}


const finishHtml = () => {
    data = `</body>
    </html>`
    fs.appendFile("./dist/team.html", data, function (err) {
        if (err) {
            return rejects(err)
        };
    })
}
askQuestionAgain();
StartHtml();
