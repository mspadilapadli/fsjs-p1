const { config } = require("process");
const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {
    static showCommands() {
        View.showCommands();
    }

    static async readDataPlanes() {
        try {
            const data = await Model.getPlaneList();
            View.showPlaneList(data);
        } catch (error) {
            View.showError(error);
        }
    }
    static async showDataPassengers() {
        try {
            const data = await Model.getPassengerList();
            View.showPassengerList(data);
        } catch (error) {
            View.showError(error);
        }
    }
    static async flightInfo(id) {
        try {
            const data = await Model.getFlightInfo(id);
            View.showFlightInfo(data);
        } catch (error) {
            View.showError(error);
        }
    }

    static async buyTicket(input) {
        try {
            const buyedTicket = await Model.buyTicket(input);
            View.showBuyTicket(buyedTicket);
        } catch (error) {
            View.showError(error);
        }
    }
    static async ticketInfo(id) {
        try {
            const ticketDetail = await Model.getTicketInfo(id);
            View.showTicketInfo(ticketDetail);
        } catch (error) {
            View.showError(error);
        }
    }
}

module.exports = Controller;
