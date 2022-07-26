const licenses = require("./licenses")

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseInfo(license) {
  let licenseInfo = {
    name: "No License"
  }
  if (license === "No License") {
    return licenseInfo
  } else {
    licenseInfo = licenses.filter(obj => obj['name'] == license);
    return licenseInfo[0]
  }
}

function renderLicenseBadge(license) {
  if (license.name === "No License") {
    return ''
  } else {
    return `${license.badge}${license.link}
    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.name === "No License") {
    return ''
  } else {
    return `
- [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license,title) {
  if (license.name === "No License") {
    return ''
  } else {
    return `## License
    
${title} is licensed under [${license.name}](${license.link})

    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseInfo = getLicenseInfo(data.license)
  return `# ${data.title}
  ${renderLicenseBadge(licenseInfo)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)${renderLicenseLink(licenseInfo)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

Use the following code in the command line to install the application:

    ${data.installation}

## Usage

Use the following code in the command line to run the application:

    ${data.usage}


${renderLicenseSection(licenseInfo,data.title)}
## Contributing

${data.contribution}

## Tests

${data.testing}

## Questions

GitHub Account:  [${data.github}](https://github.com/${data.github})

Email Address: ${data.email}

`;
}

module.exports = generateMarkdown;
