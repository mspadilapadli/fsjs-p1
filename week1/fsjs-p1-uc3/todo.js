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

        // Controller.status(input, true); // versi handle by 1 method
        break;
    case "uncomplete":
        Controller.unComplete(input);

        // Controller.status(input, false); // versi handle by 1 method
        break;
    default:
        console.log("Command not found");
        break;
}
