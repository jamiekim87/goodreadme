const inquirer = require('inquirer')
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

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
        // { 
        //     type: 'input',
        //     name: 'contents',
        //     message: "What is the Table of Contents?"
        // },
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
        },
        { 
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
            message: "What is the questions?"
        }
    ])
    .then(res => {
        console.log(res)
        let contents = generateMarkdown(res)
        writeToFile('README.md', contents) 
    })
    .catch(err => console.log(err))
}

questions()


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) { console.log(err) }
        console.log('File Created!')
    })
  
}

// // function to initialize program
// function init() {

// }


// // function call to initialize program
// init();
