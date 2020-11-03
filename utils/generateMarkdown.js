// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.project_title}
</br>
<img src="https://img.shields.io/badge/license-${data.license}-blue)"/>
<br />


## Description
${data.project_description}
</br>

## Table of Contents

* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${data.project_install_instructions}
</br>

## Usage
${data.usage_information}
</br>

## Contributing
${data.project_contribution_guidelines}
</br>

## Tests
${data.project_test_instructions}
</br>

## License
This application is covered under ${data.license}
</br>

## Questions
[GitHub Profile](https://github.com/${data.github})
</br>
[Shoot me an Email!](${data.email})
`;


}

module.exports = generateMarkdown;
