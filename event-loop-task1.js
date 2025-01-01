// Task:
// You need to create a program that:

// Logs "Start Quiz".
// Sets up:
// A setTimeout for 1 second to log "Timer done".
// A setImmediate to log "Immediate executed".
// A Promise that resolves immediately to log "Promise resolved".
// A process.nextTick to log "Next Tick executed".
// At the end of the script, log "Quiz Running".
const process = require("process");
console.log(`Start Quiz`);
setTimeout(() => {
    console.log(`Timer done`);
}, 1000);


Promise.resolve().then(() => console.log(`Promise Resolved`));
process.nextTick(() => console.log(`Next tick executed`));

console.log(`Quiz running`);


