// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Title of repository: ',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Description for the repository: ',
                name: 'description'
            },
            {
                type: 'input',
                message: 'Table of contents: ',
                name: 'tableOfContents'
            },
            {
                type: 'input',
                message: 'Installation: ',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'Usage: ',
                name: 'usage'
            },
            {
                type: 'input',
                message: 'License: ',
                name: 'license'
            },
            {
                type: 'input',
                message: 'Contributing: ',
                name: 'contributing'
            },
            {
                type: 'input',
                message: 'Tests: ',
                name: 'tests'
            },
            {
                type: 'input',
                message: 'Questions: ',
                name: 'questions'
            }
        ])
        .then((response) => {
            const filename = `${response.title.toLowerCase().split('').join('')}.md`;

            fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
            err ? console.error(err) : console.log('Success!')
            );
        }
    );
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();