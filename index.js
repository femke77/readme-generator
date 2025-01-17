#!/usr/bin/env node
const { writeFileSync } = require("fs");
const generateMarkdown = require("./utils/generateMD");
const { prompt, registerPrompt } = require("inquirer");
registerPrompt("filePath", require("inquirer-select-directory"));

const imageArr = [];

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "If tests are available, what command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide comprehensive usage instructions.",
    default:
      "Clone the repository, run the install command and then 'npm start'. Then navigate to the localhost port.",
  },
  {
    type: "input",
    name: "contributing",
    message: "If contributing is allowed, how does one contribute to the repo?",
    default: "Fork the repository and make a pull request with your new code.",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    default: "megan.meyers.388@gmail.com",
  },

  {
    type: "input",
    name: "deployed",
    message: "What is the deployed application link?",
  },
  {
    type: "input",
    name: "issues",
    message: "Describe any known issues with the code base.",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Provide credits to collaborators and/or references to third-party integrations.",
  },
  {
    type: "filePath",
    name: "from",
    message: "Where you like to output the readme.md file?",
    basePath: "./",
  },

  {
    type: "checkbox",
    name: "tech",
    message: "Select all tech badges you wish to appear in the readme:",
    choices: [
      "NodeJS",
      "JavaScript",
      "Express.js",
      "Apollo GraphQL",
      "MySQL",
      "Sequelize",
      "MongoDB",
      "Firebase",
      "ChatGPT",
      "React",
      "React Router",
      "Vite",
      "MUI",
      "TailwindCSS",
      "Jest",
      "Selenium",
      "Cypress",
      "TypeScript",
      "React Query",
      "Redux Toolkit",
      "Zod",
      'Vitest',
      "PostgreSQL",
      "Docker",
      "Prisma",
      "Render",
      "Github Actions",
      "NestJS",
      "Redis",
      "CircleCI",
      "Bootstrap",
      "Green Sock",
      "Handlebars",
      "JWT",
      "Heroku",
      "Swagger",
      "Tampermonkey",
      "OpenAI",
      "Netlify",
      "JQuery",
      "Testing Library",
      "Socket.io",
      "Headless UI"


 

    ],
  },
  {
    type: "confirm",
    name: "screenshot",
    message: "Do you want to add one or more screenshots?",
  },
];

async function app() {
  let answers = await prompt(questions);

  if (answers.screenshot) {
    const { dir } = await prompt([
      {
        type: "list",
        name: "dir",
        message: "Where are the screenshots located?",
        choices: ["assets/images", "src/assets/images"],
      },
    ]);
    answers.dir = dir;
    do {
      answer = await prompt([
        {
          type: "input",
          name: "fn",
          message: "What is the filename?",
        },
        {
          type: "confirm",
          name: "cont",
          message: "Do you want to add a another screenshot?",
        },
      ]);
      imageArr.push(answer.fn);
    } while (answer.cont);
  }
  writeFile(answers);
}

function writeFile(data) {
  writeFileSync(`${data.from}/README.md`, generateMarkdown(data, imageArr));
  console.log(`Success! Your file is located in the ${data.from} directory.`);
}
app();

// TODO: do not ask about location of screenshots until user says they do want screenshots.
