class View {
    static showData({ code, data }) {
        switch (code) {
            case "listBank":
                console.log(data);
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
