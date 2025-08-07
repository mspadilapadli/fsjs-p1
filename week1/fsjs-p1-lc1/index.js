const Controller = require("./Controllers/controller");

const [command, ...input] = process.argv.slice(2);

switch (command) {
    case "list":
        Controller.getCompanies();
        break;
    case "listEmployee":
        Controller.getEmployees(input);
        break;
    case "addEmployee":
        Controller.addEmployee(input);
        break;
    default:
        break;
}
