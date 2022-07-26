const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const licenses = require("./utils/licenses")

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
 

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: "What is your GitHub username?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address?"
  },
  {
    type: 'input',
    name: 'title',
    message: "What is the name of your project?"
  },
  {
    type: 'input',
    name: 'description',
    message: "What is the description of you project?"
  },
  {
    type: 'list',
    name: 'license',
    message: "What license is",
    choices: ["No License",new inquirer.Separator(),...licenses],
    loop: false
  },
  {
    type: 'input',
    name: 'installation',
    message: "What is the command prompt to install the application?"
  },
  {
    type: 'input',
    name: 'usage',
    message: "What is the command prompt to utilize the application?"
  },
  {
    type: 'input',
    name: 'contribution',
    message: "What are the contribution guidelines?"
  },
  {
    type: 'input',
    name: 'testing',
    message: "What are the testing instructions?"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fileName = fileName.replace(/\s+/g, '')
  const readMeContent = generateMarkdown(data);
    fs.writeFile(fileName + '_README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile(answers.title,answers);
  });
}

// Function call to initialize app
init();



