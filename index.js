var inquirer = require("inquirer");

// array of questions for user
const questions = [
//enter project title
    {
        type: 'input',
        name: 'project_title',
        message: "What's your project name?",
    },
//enter description
    {
        type: 'input',
        name: 'project_description',
        message: "What's your project description?",
    },
//enter installation instructions
    {
        type: 'input',
        name: 'project_install_instructions',
        message: "What are your project installation instructions?",
    },
//enter usage information
    {
        type: 'input',
        name: 'usage_information',
        message: "What's your project usage information?",
    },
//enter contribution guidelines
    {
        type: 'input',
        name: 'project_contribution_guidelines',
        message: "What are your project contribution guidelines?",
    },
//enter test instructions
    {
        type: 'input',
        name: 'project_test_instructions',
        message: "What are your project test instructions?",
    },
//choose license (list)
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to add?',
        choices: [
            "<None>",
            "Academic Free License v3.0",
            "Apache license 2.0",
            "Artistic license 2.0",
            "Boost Software License 1.0",
            "BSD 2 - clause 'Simplified' license",
            "BSD 3 - clause 'New' or 'Revised' license",
            "BSD 3 - clause Clear license",
            "Creative Commons license family",
            "Creative Commons Zero v1.0 Universal",
            "Creative Commons Attribution 4.0",
            "Creative Commons Attribution Share Alike 4.0",
            "Do What The F * ck You Want To Public License",
            "Educational Community License v2.0",
            "Eclipse Public License 1.0",
            "Eclipse Public License 2.0",
            "European Union Public License 1.1",
            "GNU Affero General Public License v3.0",
            "GNU General Public License family",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "GNU Lesser General Public License family",
            "GNU Lesser General Public License v2.1",
            "GNU Lesser General Public License v3.0",
            "ISC",
            "LaTeX Project Public License v1.3c",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",
            "SIL Open Font License 1.1",
            "University of Illinois / NCSA Open Source License",
            "The Unlicense",
            "zLib License"
        ],
    },
//enter github username
    {
        type: 'input',
        name: 'github',
        message: "What's your GitHub username?",
    },
//enter email address
    {
        type: 'input',
        name: 'email',
        message: "What's your email address?",
    }
];

// function to write README file
/*function writeToFile(fileName, data) {
}*/

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(JSON.stringify(answers, null, '  '));
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });
}

// function call to initialize program
init();
