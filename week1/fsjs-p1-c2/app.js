const Controller = require("./Controllers/controller");

const [command, ...input] = process.argv.slice(2);

switch (command) {
    case "help":
        Controller.showCommands();
        break;
    case "planeList":
        Controller.readDataPlanes();
        break;
    case "passengerList":
        Controller.showCommands();
        break;
    case "flightInfo":
        Controller.showCommands();
        break;
    case "buyTicket":
        Controller.showCommands();
        break;
    case "ticketInfo":
        Controller.showCommands();
        break;

    default:
        Controller.showCommands();

        break;
}
