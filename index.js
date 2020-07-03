/* 
1) write question for inquier
*/

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message:"What is your project Title?"
    },

    {
        type: "input",
        name: "description",
        message: "How do you describe your project?"
    },

    {
        type: "input",
        name:   "install",
        message: "What are the steps required to install the project?"
    },

    {
        type: "input",
        name: "usage",
        message: "Write instructions for useing the project."
    },

    {
        type: "input",
        name: "credits",
        message: " List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well."
    },
// might want to use differenct input option for license
    {
        type:"input",
        name: "license",
        message: "What license do you choose?"
    },

    {
        type: "input",
        name: "contributing",
        message: "If you would like other developers to contribute, what are your guidelines? (ex. Contributor Covenant)"
    },

    {
        type: "input",
        name: "test",
        message: "Write tests for your application. Then provide examples on how to run them."
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name:  "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name:  "question",
        message: "Type instructions on how to reach you with additional questions."
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
