// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return `## License\n![License](https://img.shields.io/badge/License-${license}%202.0-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return ` - [License](#License)`;
  }
  return '' ; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under ${license}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
   - [Installation](#Installation)
   - [Usage](#Usage)
  ${renderLicenseLink(data.license)}
   - [Contributing](#Contributing)
   - [Questions](#Questions)  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}  
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Email: ${data.userEmail}\n
  GitHub: [${data.gitHub}](https://github.com/${data.gitHub}/)`;
}

module.exports = generateMarkdown;