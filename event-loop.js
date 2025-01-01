// example of event-loop
// synchronous task
// async -> microtasks (vip)
// async -> macrotasks (Timers)
console.log("Chef starts cooking");

setTimeout(() => console.log("Serve Timer Customer"), 0);
setImmediate(() => console.log("Serve Immediate Customer"));
Promise.resolve().then(() => console.log("VIP Customer Served"));

process.nextTick(() => console.log("Immediate VIP Served"));

console.log("Chef finishes cooking");


// Why This Order?
// The chef handles all synchronous work first (console.log()).
// process.nextTick runs next because it’s a microtask with the highest priority in Node.js.
// Promises are also microtasks and run right after process.nextTick.
// setImmediate executes before setTimeout in Node.js because of event loop phases.
