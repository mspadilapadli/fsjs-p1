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
}

module.exports = View;
