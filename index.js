// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [

  {
    type: 'input',
    name: 'title',
    message: 'What is the project Title?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter project Name!');
        return false;
      }
    }
  },
  // Confirming if the user wants to add a description
  {
    type: 'confirm',
    name: 'confirmAbout',
    message: 'Would you like add a decription?',
    default: true
  },
  // Description input
  {
    type: 'input',
    name: 'about',
    message: 'Please add a description',
    when: ({ confirmAbout }) => {
      if (confirmAbout) {
        return true;
      } else {
        return false;
      }
    }
  },
  // Table of contents input
  {
    type: 'input',
    name: 'github',
    message: 'Please Enter Your table of contents',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter the table of contents');
      }
    }
  },
  // Confirm Installation
  {
    type: 'confirm',
    name: 'confirmAbout',
    message: 'Would you like to add some information about the installation process?',
    default: true
  },
  // Installation
  {
    type: 'input',
    name: 'about',
    message: 'Please input information on how to install the application',
    when: ({ confirmAbout }) => {
      if (confirmAbout) {
        return true;
      } else {
        return false;
      }
    }
  },
  // Usage Information
  {
    type: 'confirm',
    name: 'confirmAbout',
    messgae: 'Would you like to add usage information?',
    default: true
  },
  {
    type: 'input',
    name: 'about',
    message: 'Please input usage information',
    when: ({ confirmAbout }) => {
      if (confirmAbout) {
        return true;
      } else {
        return false;
      }
    }
  },
  // Licensing
  {
    type: 'list',
    name: 'license',
    message: 'Which license is the application listed under? (Check all that apply)',
    // Need to change options
    choices: ['MIT','GPL','Apache','GNU','N/A']
  },
  // Contribution guidlines
  {
    type: 'confirm',
    name: 'confirmAbout',
    messgae: 'Would you like to add information on the contribution?',
    default: true
  },
  {
    type: 'input',
    name: 'about',
    message: 'Please input contribution information',
    when: ({ confirmAbout }) => {
      if (confirmAbout) {
        return true;
      } else {
        return false;
      }
    }
  },
  // Test Instructions
  {
    type: 'confirm',
    name: 'confirmAbout',
    messgae: 'Would you like to add test instructions?',
    default: true
  },
  {
    type: 'input',
    name: 'about',
    message: 'Please add test instructions',
    when: ({ confirmAbout }) => {
      if (confirmAbout) {
        return true;
      } else {
        return false;
      }
    }
  },
  // Questions contact information
  {
    type: 'input',
    name: 'link',
    message: 'Enter the Github link to your project. (Required)',
    validate: projectlinkInput => {
      if(projectlinkInput) {
        return true;
      } else {
        console.log ('Please include the github link');
      }
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions) 
  .then(data => {
    console.log(data)
    writeToFile("readMe.md",generateMarkdown(data))
  })
}

// Function call to initialize app
init();
