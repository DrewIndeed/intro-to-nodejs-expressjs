console.log("Starting first task...");
setTimeout(() => {
  console.log("Starting second task...");
}, 0);
console.log("Starting third task...");
// ==> As you can see, even thought the time for setTimeout is 0 second, it
// was still ger offloaded and put at the back of the execution line
