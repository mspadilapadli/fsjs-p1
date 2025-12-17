const Controller = require("./Controllers/controller");

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
    case "addCustomer":
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
