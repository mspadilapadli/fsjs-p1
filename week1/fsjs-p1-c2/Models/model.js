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

            //*destruct property in params
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
            //get data flidht info wirh id param
            // get data passengers
            // validasi seatNumber A1-D8
            // validasi seatNumber availability
            // create id auto increment
            // add passanger
            // save pasangers

            const flightInfo = await this.getFlightInfo(id);
            const passengers = await this.getPassengerList();

            // validasi seatNumber
            const [seatCol, seatRow] = seatNumber.split("-");
            if (!"ABCD".includes(seatCol) || seatRow <= 0 || seatRow > 8)
                throw new Error(
                    `Invalid seat number! please choose another seat`
                );

            //*seaNumber avalaibilty check

            //* some
            // const isSeatTaken = flightInfo.passengers.some(
            //     (passenger) => passenger.ticket.seatNumber == seatNumber
            // );

            //*find
            const isSeatTaken = flightInfo.passengers.find(
                ({ ticket }) => ticket.seatNumber === seatNumber
            );

            if (isSeatTaken)
                throw new Error(
                    `Seat already been booked, please choose another seat`
                );

            const idPassengger =
                Math.max(0, ...passengers.map(({ id }) => id)) + 1;

            //add
            const newPassenger = Factory.createPassenger(
                idPassengger,
                name,
                gender,
                flightInfo.airlineName,
                type,
                flightInfo.origin,
                flightInfo.destination,
                seatNumber
            );
            passengers.push(newPassenger);

            // save
            await fs.writeFile(
                "./data/passenger.json",
                JSON.stringify(passengers, null, 4)
            );

            return newPassenger;
        } catch (error) {
            throw error;
        }
    }

    static async getTicketInfo(id) {
        try {
            //step
            // get data ticket from passager.json
            // handle not found
            // return

            const passangers = await this.getPassengerList();
            const ticket = passangers.find((passager) => passager.id == id);
            if (!ticket)
                throw new Error(`Passenger not found, please check yout input`);
            return ticket;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;
