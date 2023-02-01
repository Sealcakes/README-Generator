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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
