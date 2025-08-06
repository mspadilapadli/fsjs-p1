const { describe } = require("node:test");

class View {
    static showCommands() {
        console.log(`
Command List
============
node app.js
node app.js help 
node app.js planeList 
node app.js passengerList 
node app.js flightInfo <flight_number>
node app.js buyTicket  <flight_number> <passenger_name> <passenger_gender> <seat_number> <ticket_type>
node app.js ticketInfo <passenger_id> `);
    }

    static showPlaneList(data) {
        console.table(data);
    }

    static showPassengerList(data) {
        const passengers = data.map(
            ({ id, name, gender, ticket: { airlineName } }) => {
                return {
                    id,
                    name,
                    gender,
                    airlineName,
                };
            }
        );

        console.table(passengers);
    }
    static showFlightInfo(data) {
        console.log(data);
    }

    static showBuyTicket(buyed) {
        console.log(
            `Success buy ticket for seat ${seatNumber} for ${airlineName} destination to ${destination}`
        );
    }

    static showError(err) {
        console.log(err.message);
    }
}

module.exports = View;
