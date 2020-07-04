// function to generate markdown for README
// figure out license badge.
// Do I need a second badge specific to the repo
function generateMarkdown(data) {
  return `
  ${data.license}

  # Project Title: ${data.title}

  ## Project Description:
 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  * [Badges](#badges)
  
  ## Installation:
 
  ${data.install}

  ## Usage:
 
  ${data.usage}

  ## License:
  ${data.license}

  ## Credits:

  ${data.credits}
  
  ## Contributors:
  
  ${data.contributors}

  ## Test:
   
  ${data.test}

  ## Questions:
  <br>
  ${data.question}
  
  Email: ${data.email}
  
  Git Hub Profile: https://github.com/${data.userName}

  ## Badges:
  ![GitHub followers](https://img.shields.io/github/followers/${data.userName}?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/${data.userName}/${data.repoName}?style=social)

  `;
}
module.exports = generateMarkdown;
