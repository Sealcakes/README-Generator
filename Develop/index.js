// Links to inquirer/file system/generate markdown script
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Question prompts for inquirer
let questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle",
    },

    {
        type: "input",
        message: "What is the description of your project?",
        name: "projectDescription",
    },

    {
        type: "input",
        message: "What are the project installation steps?",
        name: "projectInstallation",
    },

    {
        type: "input",
        message: "What is the usage information for this project?",
        name: "projectUsage",
    },

    {
        type: "input",
        message: "Who are the contributing authors of this project?",
        name: "projectContributors",
    },

    {
        type: "input",
        message: "What are the testing instructions for this project?",
        name: "projectTestInformation",
    },

    {
        type: "list",
        name: "projectLicense",
        message: "What license are you using for this project?",
        choices: [
            "Apache License 2.0",
            "BSD 3-Clause License",
            "GNU General Public License v3.0",
            "MIT License",
            "Mozilla Public License 2.0",
            "None"
        ],
    }
];

// Function that creates the readme using the createFile callback
const createReadMe = createFile => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./newReadme.md', createFile, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
}

// Initialize function for entire project, inputs the questions variable into inquirer and then uses the answers to generate the md file
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {

        // Create File variable that inputs the returned promise from inquirer into the generateMarkdown function
        var createFile = generateMarkdown(answers);
        console.log(typeof createFile);
        createReadMe(createFile);
    })
}

// Function call to initialize app
init();
