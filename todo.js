#!/usr/bin/env node

console.log(process.argv);

// Set args to a string array of command line arguments
const args = process.argv;

const commands = ["new", "get", "complete", "help"];

function usage() {
  const usageText = `
    Todo helps you manage your todo tasks.
    
    Usage:
        todo <command>
    
        commands can be:
        
        new:      create a new todo
        get:      retrieve your todos
        complete: mark a todo complete
        help:     view the usage guide
    `;
  console.log(usageText);
}

// log errors
function errorLog(error) {
  console.log(error);
}

// Make sure there are only 3 arguments
if (args.length > 3) {
  errorLog("Please enter just one argument");
  usage();
}

// Make sure the user entered a valid command word
// The user's command is args[2]
if (!commands.includes(args[2])) {
  errorLog("Please enter a valid command");
  usage();
}

// Implement commands by checking the user's entry (args[2]) against different cases
switch (args[2]) {
  case "help":
    usage();
    break;
  case "new":
    break;
  case "get":
    break;
  case "complete":
    break;
  default:
    errorLog("Please enter a valid command");
    usage;
}
