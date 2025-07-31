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
        Controller.complete(input);
        break;
    case "uncomplete":
        Controller.unComplete(input);
        break;
    default:
        console.log("Commansd not found");
        break;
}
