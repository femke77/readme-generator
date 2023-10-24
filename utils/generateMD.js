function renderLicenseBadge(license) {
  if (license !== "None") {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(
      / /g,
      "%20"
    )}-blue.svg)`;
  }
  //  return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="Github license">`;
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license-📜)\n`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 📜 \nThis project is licensed under the ${license} license.`;
  }
  return "";
}
function renderScreenshots(images) {
  let html = "";
  if (images.length > 0) {
    images.forEach((img, i) => {
      html += `![screenshot-${i}](assets/images/${img})\n`;
    });
    return html;
  } else {
    return "No screenshots yet.";
  }
}

function generateMarkdown(data, imageArr) {
  return `# ${data.title} 👨‍💻
  ${renderLicenseBadge(data.license)}
  
  ## Description  ✏️
  
  ${data.description}
  
  ## Table of Contents 📖
  
  - [Installation](#installation-🛠️)
  
  - [Usage](#usage-📝)

  ${renderLicenseLink(data.license)}

  - [Issues](#known-issues)

  - [Contributing](#how-to-contribute-🤝)
  
  - [Tests](#tests-🧪) 

  - [Credits](#credits)
  
  - [Questions](#questions-❓)
  
  ## Installation 🛠️
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage 📝
  
  ${data.usage}

  ### Deployed Link
  ${data.deployed}

### Screenshots
${renderScreenshots(imageArr)}

${renderLicenseSection(data.license)}

## Known Issues
${data.issues}

## How To Contribute 🤝
  
${data.contributing}
  
## Tests 🧪
  
To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`


## Credits
${data.credits}

 ## Questions ❓
  
If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. 
  
  `;
}

module.exports = generateMarkdown;
