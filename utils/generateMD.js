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
    else if (badge === "Cypress")
      markdown += ` ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)`;
    else if (badge === "TypeScript")
      markdown += ` ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)`;
    else if (badge === "React Query")
      markdown += ` ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)`;
    else if (badge === "Redux Toolkit")
      markdown += ` ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)`;
    else if (badge === "Zod")
      markdown += ` ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)`;
    else if (badge === "Vitest")
      markdown += ` ![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)`;
    else if (badge === "PostgreSQL")
      markdown += ` ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)`;
    else if (badge === "Docker")
      markdown += ` ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)`;
    else if (badge === "Prisma")
      markdown += ` ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)`;
    else if (badge === "Render")
      markdown += ` ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)`;
    else if (badge === "Github Actions")
      markdown += ` ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)`;
    else if (badge === "Nestjs")
      markdown += ` ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)`;
    else if (badge === "Redis")
      markdown += ` ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)`;
    else if (badge === "CircleCI")
      markdown += ` ![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)`;
    else if (badge === "Bootstrap")
      markdown += ` ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)`;
    else if (badge === "Green Sock")
      markdown += ` ![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)`;
    else if (badge === "Handlebars")
      markdown += ` ![Handlebars](https://img.shields.io/badge/Handlebars-%23000000?style=for-the-badge&logo=Handlebars.js&logoColor=white)`;
    else if (badge === "JWT")
      markdown += ` ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)`;
    else if (badge === "Heroku")
      markdown += ` ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)`;
    else if (badge === "Swagger")
      markdown += ` ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)`;
    else if (badge === "Tampermonkey")
      markdown += ` ![Tampermonkey](https://img.shields.io/badge/tampermonkey-%2300485B.svg?style=for-the-badge&logo=tampermonkey&logoColor=white)`;
    else if (badge === "OpenAI")
      markdown += ` ![OpenAI](https://a11ybadges.com/badge?logo=openai)`;
    else if (badge === "Netlify")
      markdown += ` ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)`;
    else if (badge === "JQuery")
      markdown += ` ![jQuery](https://a11ybadges.com/badge?logo=jquery)`;
    else if (badge === "Testing Library")
      markdown += ` ![Testing Library](https://a11ybadges.com/badge?logo=testinglibrary)`;
    else if (badge === "Socket.io")
      markdown += ` ![Socket.io](https://a11ybadges.com/badge?logo=socketdotio)`;
    else if (badge === "JavaScript")
      markdown += ` ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)`;
    else if (badge === "Headless UI")
      markdown += ` ![HeadlessUI](https://img.shields.io/badge/Headless%20UI-66E3FF.svg?style=for-the-badge&logo=Headless-UI&logoColor=black)`;
    else if (badge === "Stripe")
      markdown += ` ![Stripe](https://img.shields.io/badge/Stripe-5469d4?style=for-the-badge&logo=stripe&logoColor=ffffff)`;
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
  let md = "";
  if (images.length > 0) {
    images.forEach((img, i) => {
      md += `![screenshot-${i}](${dir}/${img})\n\n`;
    });
    return md;
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
