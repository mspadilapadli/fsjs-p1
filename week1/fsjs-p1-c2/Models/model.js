const Factory = require("./class");
const fs = require("fs").promises;

class Model {
    static async getPlaneList() {
        try {
            // oneline
            return Factory.createPlanes(
                JSON.parse(await fs.readFile("./data/plane.json", "utf-8"))
            );

            //step by step
            let planeData = await fs.readFile("./data/plane.json", "utf-8");
            let parseData = JSON.parse(planeData);
            let instanceData = Factory.createPlanes(parseData);
            return instanceData;
        } catch (error) {
            throw error;
        }
    }

    static async getPassengerList() {
        try {
            // oneline
            return Factory.createPassengers(
                JSON.parse(await fs.readFile("./data/passenger.json", "utf-8"))
            );

            //step by step
            let passengersData = await fs.readFile("./data/passenger.json");
            let parseData = JSON.parse(passengersData);
            let instanceData = Factory.createPassengers(parseData);
            return instanceData;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;
