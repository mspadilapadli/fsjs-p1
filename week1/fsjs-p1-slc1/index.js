const Controller = require("./Controllers/controller");
const { addBank } = require("./Models/model");

const [command, ...input] = process.argv.slice(2);

switch (command) {
    case "list":
        Controller.showList();
        break;
    case "addBank":
        Controller.addBank(input);
        break;
    case "deleteBank":
        Controller.deleteBank(input);
        break;
    case "addaCustomer":
        Controller.addCustomer(input);
        break;
    case "deleteCustomer":
        Controller.deleteCustomer(input);
        break;
    case "detail":
        Controller.detailBank(input);
        break;
    default:
        console.log(`Command not found`);
        break;
}
