const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const portfolioData = {
    "portfolio": {
      "personalInfo": {
        "name": "Your Name",
        "email": "your@email.com",
        "location": "City, Country",
        "phone": "123-456-7890",
        "website": "https://yourwebsite.com"
      },
      "education": [
        {
          "degree": "Bachelor of Science in Computer Science",
          "school": "University XYZ",
          "year": 2020
        },
        {
          "degree": "Master of Business Administration",
          "school": "Business School ABC",
          "year": 2022
        }
      ],
      "workExperience": [
        {
          "position": "Software Developer",
          "company": "Tech Solutions Inc.",
          "startDate": "2022-01-01",
          "endDate": "2023-05-30",
          "responsibilities": ["Developing web applications", "Collaborating with cross-functional teams"]
        },
        {
          "position": "Project Manager",
          "company": "Project Management Co.",
          "startDate": "2023-06-01",
          "endDate": null,
          "responsibilities": ["Leading project teams", "Ensuring project delivery"]
        }
      ],
      "projects": [
        {
          "title": "Portfolio Website",
          "description": "Developed a personal portfolio website using HTML, CSS, and JavaScript.",
          "technologies": ["HTML", "CSS", "JavaScript"],
          "link": "https://github.com/yourusername/portfolio"
        },
        {
          "title": "Online Store App",
          "description": "Built an e-commerce web application with user authentication and payment processing.",
          "technologies": ["React", "Node.js", "MongoDB"],
          "link": "https://github.com/yourusername/online-store"
        }
      ],
      "skills": {
        "programmingLanguages": ["JavaScript", "Python", "Java"],
        "webTechnologies": ["React", "Node.js", "HTML5", "CSS3"],
        "databases": ["MySQL", "MongoDB"],
        "projectManagement": ["Agile", "Scrum"],
        "languages": ["English", "Spanish"]
      },
      "certifications": [
        {
          "title": "Certified Web Developer",
          "authority": "Web Development Institute",
          "date": "2021-04-15"
        },
        {
          "title": "Project Management Professional",
          "authority": "Project Management Institute",
          "date": "2022-08-20"
        }
      ]
    }
  };
let currentDirectory = portfolioData;

function printDirectory(directory) {
  let outputText = '';
  for (const key in directory) {
    outputText += `${key}\n`;
  }
  output.textContent = outputText;
}

function printError() {
  output.textContent += 'Command not found. Type "help" for available commands.\n';
}

function navigateDirectory(path) {
  const parts = path.split('/');
  let current = portfolioData;

  for (const part of parts) {
    if (part === '..') {
      current = portfolioData;
    } else if (current[part]) {
      current = current[part];
    } else {
      printError();
      return;
    }
  }

  printDirectory(current);
}

function handleCommand(command) {
  output.textContent += `$ ${command}\n`;

  const [cmd, arg] = command.split(' ');

  switch (cmd) {
    case 'cd':
      navigateDirectory(arg);
      break;
    case 'ls':
      printDirectory(currentDirectory);
      break;
    case 'help':
      output.textContent += 'Available commands: cd, ls, help\n';
      break;
    default:
      printError();
  }

  terminal.scrollTop = terminal.scrollHeight;
}

function prompt() {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'text';
    terminal.appendChild(input);
    input.focus();

    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        const command = input.value;
        input.remove();
        output.textContent += `$ ${command}\n`;
        resolve(command);
      }
    });
  });
}

async function runTerminal() {
  while (true) {
    const command = await prompt();
    handleCommand(command);
  }
}

// Initial display
printDirectory(currentDirectory);

// Run the terminal
runTerminal();
