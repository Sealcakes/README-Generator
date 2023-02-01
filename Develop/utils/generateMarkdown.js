const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index')


function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'Apache License 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'BSD 3-Clause License') {
    licenseBadge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
