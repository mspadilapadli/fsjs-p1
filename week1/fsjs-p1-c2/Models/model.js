const { config } = require("process");
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

    static async getFlightInfo(id) {
        try {
            const planeData = await this.getPlaneList();
            const passengers = await this.getPassengerList();

            const planeDetail = planeData.find(
                ({ flightNumber }) => flightNumber == id
            );
            if (!planeDetail)
                throw new Error(
                    `Fligth number with id ${id} not found, please check your input`
                );

            //get passangers in plane
            // planeDetail.passengers = passengers.filter(
            //     (passenger) =>
            //         passenger.ticket.airlineName == planeDetail.airlineName
            // );

            // destruct property in params
            planeDetail.passengers = passengers.filter(
                ({ ticket: { airlineName } }) =>
                    airlineName == planeDetail.airlineName
            );
            return planeDetail;
        } catch (error) {
            throw error;
        }
    }

    static async buyTicket([id, name, gender, seatNumber, type]) {
        try {
            //step
            //get data plane wirh id param
            // get data passengers
            // check seatNumber availability
            // create id auto increment
            // add passanger
            // save pasangers

            const planes = await this.getPlaneList();
            const passengers = await this.getPassengerList();
            const flightInfo = await this.getFlightInfo(id);

            const plane = planes.find(({ flightNumber }) => flightNumber == id);
            if (!plane)
                throw new Error(`plane not found, please check your input`);

            // check seatNumber
            const isSeatTaken = flightInfo.passengers.some(
                (passanger) => passanger.ticket.seatNumber == seatNumber
            );
            if (isSeatTaken)
                throw new Error(
                    `Seat already been booked, please choose another seat`
                );

            const idPassengger =
                Math.max(0, ...passengers.map(({ id }) => id)) + 1;
            //Math.max(0, ...passengers.map(({ pasanger }) => pasanger.id)) + 1;

            // add
            const buyedTicket = Factory.createPassenger(
                idPassengger,
                name,
                gender,
                plane.airlineName,
                type,
                plane.origin,
                plane.destination,
                seatNumber
            );
            passengers.push(buyedTicket);

            // save / rewrite json
            await fs.writeFile(
                "./data/passenger.json",
                JSON.stringify(passengers, null, 4)
            );

            return buyedTicket;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;
