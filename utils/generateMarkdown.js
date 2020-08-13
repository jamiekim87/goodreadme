// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    # Title 
    ${data.title}

  
    ## Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Description 
    ${data.description}


    ## Installation 
    ${data.installation}

    ## Usage 
    ${data.usage}

    ## license 
    ${data.license}

    ## Contributing 
    ${data.contributing}

    ## Tests 
    ${data.tests}
    
    ## Questions 
    ${data.quesitons}

  
  `;
  }
  
  module.exports = generateMarkdown;
  