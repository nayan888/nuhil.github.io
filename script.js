const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Nuhil, Ph.D. candidate and polyglot programmer with prior graduations in computer science, and former software engineer with more than 5 years of experience who believes in artificial intelligence and likes the cloud, desktop, and mobile platforms for developing software and machine learning based AI tools, following the micro-service architecture to solve real-life problems.",
  skills:
    '<span class="code">Languages:</span> Python, HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, SQL<br><span class="code">Frameworks:</span> React.js, Vue.js, Django',
  education:
    "PH.D. CANDIDATE | Computing | Boise State University | Jan 2018 – Present | Boise, ID, USA<br>MASTER OF SCIENCE | Computer Science | Lamar University | Aug 2017 | Beaumont, TX, USA<br>BACHELOR OF SCIENCE | Computer Science and Engineering | RUET | Bangladesh",
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "No Experience😥",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.facebook.com/jatin.rao.51/' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/jatin.codes/' class='success link'>Instagram</a>, <a href='https://www.twitter.com/jatinn_r/' class='success link'>Twitter</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  
  if (input == 'clear'){
    terminalOutput.innerHTML = '';
    terminalOutput.scrollTop = terminalOutput.scrollHeight;    
  } else {
      if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: ${input}</div>`;
      console.log("Oops! no such command");
      } else {
      output += COMMANDS[input];
      }

      terminalOutput.innerHTML = `${
        terminalOutput.innerHTML
        }<div class="terminal-line">${output}</div>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);