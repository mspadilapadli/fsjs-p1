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
                console.log(`Bank with name ${data.name} deleted successfully`);
                break;
            case "addCustomer":
                console.log(`Customer ${data.name} added successfully`);
                break;
            case "deleteCustomer":
                console.log(
                    `Customer with name ${data.name} deleted successfully`
                );
                break;
            case "detailBank":
                const customers = data.map(({ name, ktp, depositAmount }) => {
                    return { name, ktp, depositAmount };
                });
                console.table(customers);
                break;
            default:
                break;
        }
    }

    static showError(error) {
        console.log(error.message);
    }
}
module.exports = View;
