const Factory = require("./class");
const fs = require("fs").promises;

class Model {
    static async getPlaneList() {
        return Factory.createPlanes(
            JSON.parse(await fs.readFile("./data/plane.json", "utf-8"))
        );
    }

    static async getPassengerList() {
        return Factory.createPassengers(
            JSON.parse(await fs.readFile("./data/passenger.json", "utf-8"))
        );
    }
}

module.exports = Model;
