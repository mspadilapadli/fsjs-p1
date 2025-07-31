const Controller = require("./Controllers/controller");
const [command, ...input] = process.argv.slice(2);

switch (command) {
    case "help":
    case undefined:
        Controller.showCommand();
        break;
    case "list":
        Controller.showList();
        break;
    case "add":
        Controller.addData(input);
        break;
    case "findById":
        Controller.findById(input);
        break;
    case "delete":
        Controller.delete(input);
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
