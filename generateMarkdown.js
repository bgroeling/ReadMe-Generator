// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license==="N/A"){
        return ""
    } else {
        return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license==="N/A"){
        return ""
    } else {
        return `* [License](#license)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license==="N/A"){
        return ""
    } else {
        return `## License
        this project is licensed under the ${license} license.
        `
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.about}
  # ${data.github}
  # ${data.installation}
  # ${data.information}

  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}
  # ${data.confirmAbout}
  # ${data.guidlines}
  # ${data.instructions}
  # ${data.link}
`;
}

module.exports = generateMarkdown;