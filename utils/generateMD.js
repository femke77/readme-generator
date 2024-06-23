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

function renderTechBadges(badgeArr) {
  let markdown = ``;
  badgeArr.forEach((badge) => {
    if (badge === "Express.js")
      markdown += ` ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)`;
    else if (badge === "MySQL")
      markdown += ` ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)`;
    else if (badge === "MongoDB")
      markdown += ` ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)`;
    else if (badge === "Firebase")
      markdown += ` ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)`;
    else if (badge === "NodeJS")
      markdown += ` ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)`;
    else if (badge === "Apollo GraphQL")
      markdown += ` ![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)`;
    else if (badge === "ChatGPT")
      markdown += ` ![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)`;
    else if (badge === "React")
      markdown += ` ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)`;
    else if (badge === "MUI")
      markdown += ` ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)`;
    else if (badge === "TailwindCSS")
      markdown += ` ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)`;
    else if (badge === "Vite")
      markdown += ` ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)`;
    else if (badge === "Sequelize")
      markdown += ` ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)`;
    else if (badge === "Jest")
      markdown += ` ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)`;
    else if (badge === "Selenium")
      markdown += ` ![Selenium](https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white)`;
    else if (badge === "React Router")
      markdown += ` ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)`;
  });
  return markdown;
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)\n`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License\nThis project is licensed under the ${license} license.`;
  }
  return "";
}
function renderScreenshots(images, dir) {
  let html = "";
  if (images.length > 0) {
    images.forEach((img, i) => {
      html += `![screenshot-${i}](${dir}/${img})\n`;
    });
    return html;
  } else {
    return "No screenshots yet.";
  }
}

function generateMarkdown(data, imageArr) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ${renderTechBadges(data.tech)}
  
  ## Description  ✏️
  
  ${data.description}
  
  ## Table of Contents 📖
  
  [Installation](#installation)

  [Usage](#usage)

  ${renderLicenseLink(data.license)}

  [Issues](#known-issues)

  [Contributing](#how-to-contribute)

  [Tests](#tests) 

  [Credits](#credits)

  [Questions](#questions)
  
  ## Installation 
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage 
  
  ${data.usage}

  ### Deployed Link
  ${data.deployed}

### Screenshots
${renderScreenshots(imageArr, data.dir)}

______________________________________________________________________________________

${renderLicenseSection(data.license)}

## Known Issues 
${data.issues}

## How To Contribute 
  
${data.contributing}
  
## Tests 
  
To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`


## Credits 
${data.credits}

 ## Questions 
  
 If you have any questions about the repo or notice any bugs you want to report, open an issue or contact me directly at ${
   data.email
 }. 
  
  `;
}

module.exports = generateMarkdown;
