const inquirer = require('inquirer')
const fs = require('fs')

// array of questions for user
const questions = () => {
    inquirer
    .prompt([
        { 
            type: 'input',
            name: 'title',
            message: "What is the title of your project?"
        },
        { 
            type: 'input',
            name: 'description',
            message: "What is the sections entitled description?"
        },
        { 
            type: 'input',
            name: 'contents',
            message: "What is the Table of Contents?"
        },
        { 
            type: 'input',
            name: 'installation',
            message: "What is the Installation?"
        },
        { 
            type: 'input',
            name: 'usage',
            message: "What is the Usage?"
        },
        { 
            type: 'input',
            name: 'license',
            message: "What is the license?"
        },{ 
            type: 'input',
            name: 'contributing',
            message: "What is the contributor?"
        },
        { 
            type: 'input',
            name: 'tests',
            message: "What is the tests?"
        },
        { 
            type: 'input',
            name: 'questions',
            message: "What is the quesitons?"
        }

    ])
    .then(res => {
        console.log(res.name, res.choice)
        count++
        if (count < 5) {
          question()
        }
      })
      .catch(err => console.log(err))
  }
 
  question()

// function to write README file
function writeToFile(fileName, data) {
  
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
