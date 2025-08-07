class View {
    static showData({ code, data }) {
        switch (code) {
            case "listBank":
                console.log(data);
                break;
            case "addBank":
                console.log(`Bank ${data.name} added successfully`);
                break;
            case "deleteBank":
                console.log(`Bank with ${data.name} deleted successfully`);
                break;
            case "addCustomer":
                console.log(`Customer ${data.name} added successfully`);
                break;
            default:
                break;
        }
    }

    static showError(error) {
        console.log(error);
    }
}
module.exports = View;
