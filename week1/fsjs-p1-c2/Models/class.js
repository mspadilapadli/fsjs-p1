const fs = require("fs");
// const fs = require("fs").promises;
class Plane {
    constructor(flightNumber, airlineName, origin, destination) {
        this.flightNumber = flightNumber;
        this.airlineName = airlineName;
        this.origin = origin;
        this.destination = destination;
    }
}

class Passenger {
    constructor(id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.ticket = new Ticket();
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
        return this.seatNumber(value);
    }

    toJSON() {
        return {
            airlineName: airlineName,
            type: type,
            origin: origin,
            destination: destination,
            seatNumber: seatNumber,
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
    static createsPlanes(params) {
        return params.map(
            ({ flightNumber, airlineName, origin, destination }) =>
                this.createPlane(flightNumber, airlineName, origin, destination)
        );
    }
    // passengers

    // tickets

    // one plane
    static createPlane(flightNumber, airlineName, origin, destination) {
        return new Plane(flightNumber, airlineName, origin, destination);
    }
    // one passenger
    static createPassenger(id, name, gender) {
        return new Passenger(id, name, gender);
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
// console.log(Factory.createsPlanes(data));

module.exports = Factory;
