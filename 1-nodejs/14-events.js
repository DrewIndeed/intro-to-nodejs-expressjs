const EventEmitter = require("events");

const customeEmitter = new EventEmitter();

customeEmitter.on("response", (name, id) => {
  console.log(`Received response with name as ${name} and id ${id}`);
});

customeEmitter.on("response", () => {
  console.log(`Received response none`);
});

customeEmitter.emit("response", "John", 22);
