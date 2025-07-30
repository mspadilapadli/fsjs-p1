const Controller = require("./Controllers/controller");
const [command, ...input] = process.argv.slice(2);

switch (command) {
    case "help":
    case undefined:
        console.log("list");
        break;
    case "list":
        console.log("list");
        break;
    case "add":
        console.log("add ");
        break;
    case "findById":
        console.log("findById");
        break;
    case "delete":
        console.log("delete");
        break;
    case "complete":
        console.log("complete");
        break;
    case "uncomplete":
        console.log("uncomplete");
        break;
        break;
    default:
        console.log("not found");
        break;
}
