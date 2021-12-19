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
if (!commands.includes(args[2])) {
  errorLog("Please enter a valid command");
  usage();
}
