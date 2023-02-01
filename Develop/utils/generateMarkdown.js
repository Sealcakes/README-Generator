// Grabs License Badge
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'Apache License 2.0') {
    licenseBadge = '![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'BSD 3-Clause License') {
    licenseBadge = '![License: BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } else if (license === 'GNU General Public License v3.0') {
    licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'MIT License') {
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Mozilla Public License 2.0') {
    licenseBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
  } else {
    licenseBadge = '';
  }

  return licenseBadge;
};

// Grabs link to license website/information about license
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'Apache License 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'BSD 3-Clause License') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'GNU General Public License v3.0') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'MIT License') {
    licenseLink = 'https://opensource.org/licenses/MIT';
  } else if (license === 'Mozilla Public License 2.0') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0';
  } else {
    licenseLink = '';
  }

  return licenseLink;
}

// If there is a license this function will generate a license section
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None') {
    licenseSection = '';
  } else {
    licenseSection = `License: ${license}`
  }

  return licenseSection;
}

// Function that generates the text of the markdown file (README)
function generateMarkdown(answers) {
  return `
  
  # Professional README Generator

  ## ${renderLicenseSection(answers.projectLicense)} ${renderLicenseBadge(answers.projectLicense)}
  ### ${renderLicenseLink(answers.projectLicense)}

  ## Table of Contents
  ### - [Project](#Project)
  ### - [Description](#Description)
  ### - [Installation](#Installation)
  ### - [Project Usage](#ProjectUsage)
  ### - [Project Contributions](#ProjectContributions)
  ### - [Testing Instructions](#TestingInstructions)
  ### - [License Info](#License)


  ## Project
  ### ${answers.projectTitle}

  ## Description
  ### ${answers.projectDescription}

  ## Installtion
  ### ${answers.projectInstallation}

  ## Usage
  ### ${answers.projectUsage}

  ## Contributors
  ### ${answers.projectContributors}

  ## Testing Instructions
  ### ${answers.projectTestInformation}

  ## License Information
  ### ${answers.projectLicense}
`;
}

module.exports = generateMarkdown;
