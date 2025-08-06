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
        Controller.showDataPassengers();
        break;
    case "flightInfo":
        Controller.flightInfo(+input);
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
