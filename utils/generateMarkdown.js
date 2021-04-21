// mark drecoll

// this function takes the license choice and cocatenates it to a badge image url
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `## License\n![License](https://img.shields.io/badge/License-${license}%202.0-blue.svg)`;
  }
  return '';
}

// this function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return ` - [License](#License)`;
  }
  return '';
}

// this function returns the license text description
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `\nThis project is licensed under ${license}.`;
  }
  return '';
}

// this function generates the markup that goes into the readme file
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
   - [Installation](#Installation)
   - [Usage](#Usage)
  ${renderLicenseLink(data.license)}
   - [Contributing](#Contributing)
   - [Tests](#Tests)
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