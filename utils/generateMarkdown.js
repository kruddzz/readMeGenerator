// function to generate markdown for README
// figure out license badge.
// Do I need a second badge specific to the repo
function generateMarkdown(data) {
  return `
  ${data.license}
  
  # Project Title : ${data.title}

  ## Project Description: ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation: ${data.install}

  ## Usage: ${data.usage}

  ## License: ${data.license}

  ## Credits: ${data.credits}
  
  ## Contributors: ${data.contributors}

  ## Test: ${data.test}

  ## Questions:
  ${data.question}
  Email: ${data.email}
  <br>
  Git Hub Profile: https://github.com/${data.userName}
`;
}

module.exports = generateMarkdown;
