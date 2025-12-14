// const fs = require("fs");
const fs = require("fs").promises;
// const fs = require("fs/promises");

class Plane {
    constructor(flightNumber, airlineName, origin, destination) {
        this.flightNumber = flightNumber;
        this.airlineName = airlineName;
        this.origin = origin;
        this.destination = destination;
    }
}

class Passenger {
    constructor(
        id,
        name,
        gender,
        airlineName,
        type,
        origin,
        destination,
        seatNumber
    ) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.ticket = Factory.createTicket(
            airlineName,
            type,
            origin,
            destination,
            seatNumber
        );
    }
}

class Ticket {
    #seatNumber;
    constructor(airlineName, type, origin, destination, seatNumber) {
        this.airlineName = airlineName;
        this.type = type;
        this.origin = origin;
        this.destination = destination;
        this.#seatNumber = seatNumber;
    }

    get seatNumber() {
        return this.#seatNumber;
    }

    set seatNumber(value) {
        this.#seatNumber = value;
    }

    toJSON() {
        return {
            airlineName: this.airlineName,
            type: this.type,
            origin: this.origin,
            destination: this.destination,
            seatNumber: this.#seatNumber,
        };
    }
}

//* child Ticket
class VIP extends Ticket {
    constructor(airlineName, origin, destination, seatNumber) {
        super(airlineName, "VIP", origin, destination, seatNumber);
    }
}
class Business extends Ticket {
    constructor(airlineName, origin, destination, seatNumber) {
        super(airlineName, "Business", origin, destination, seatNumber);
    }
}
class Economy extends Ticket {
    constructor(airlineName, origin, destination, seatNumber) {
        super(airlineName, "Economy", origin, destination, seatNumber);
    }
}

class Factory {
    // planes
    static createPlanes(data) {
        return data.map(({ flightNumber, airlineName, origin, destination }) =>
            this.createPlane(flightNumber, airlineName, origin, destination)
        );
    }
    // passengers
    static createPassengers(data) {
        return data.map(
            ({
                id,
                name,
                gender,
                ticket: { airlineName, type, origin, destination, seatNumber },
            }) =>
                this.createPassenger(
                    id,
                    name,
                    gender,
                    airlineName,
                    type,
                    origin,
                    destination,
                    seatNumber
                )
        );
    }

    // tickets

    // one plane
    static createPlane(flightNumber, airlineName, origin, destination) {
        return new Plane(flightNumber, airlineName, origin, destination);
    }
    // one passenger
    static createPassenger(
        id,
        name,
        gender,
        airlineName,
        type,
        origin,
        destination,
        seatNumber
    ) {
        return new Passenger(
            id,
            name,
            gender,
            airlineName,
            type,
            origin,
            destination,
            seatNumber
        );
    }
    // one ticket
    static createTicket(airlineName, type, origin, destination, seatNumber) {
        if (type == "VIP")
            return new VIP(airlineName, origin, destination, seatNumber);
        else if (type == "Business")
            return new Business(airlineName, origin, destination, seatNumber);
        else if (type == "Economy")
            return new Economy(airlineName, origin, destination, seatNumber);
        else
            return new Ticket(
                airlineName,
                type,
                origin,
                destination,
                seatNumber
            );
    }
}

//*testing readFileSync
// const data = JSON.parse(fs.readFileSync("../data/plane.json", "utf-8"));
// console.log(Factory.createPlanes(data));

// * testing readFile (promise)
// const testing = async () => {
// const data = JSON.parse(await fs.readFile("../data/plane.json", "utf-8"));

// jika hanya sekedar testing readFile promise bisa lansung di clog
// console.log(Factory.createPlanes(data));

// jika di return maka harus await atau catch untuk menampikan data akhirnya
// return Factory.createPlanes(data);
// };

// testing(); // jika hanya sekedar testing readFile promise

// jika di return maka harus await atau catch untuk menampikan data akhirnya
// (async () => {
//     try {
//         const result = await testing();
//         console.log(result);
//     } catch (err) {
//         console.error(err);
//     }
// })();

module.exports = Factory;
