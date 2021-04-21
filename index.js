// mark drecoll

// import packages used by the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// create an array of questions to ask the user
const questions = [
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
        message: 'Installation: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage: ',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What is your license?',
        name: 'license',
        choices: ['Apache', 'Boost', 'BSD', 'EPL', 'MIT', 'MPL', 'ODC_BY']
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
        message: 'GitHub Username: ',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'Email: ',
        name: 'userEmail'
    }
];

// creates a file with the name that the user inputted
function writeToFile(theFileName, data) {
    fs.writeFile(theFileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('You successfully created a new read me file.')
    );
}

// initializes the program and prompts the user for their info
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const filename = `${response.title.toLowerCase().split('').join('')}.md`;
            writeToFile(filename, response);
        }
        );
}

// calls the initialize function
init();