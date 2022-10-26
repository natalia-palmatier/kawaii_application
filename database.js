const mongoose = require('mongoose');

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://admin:password1231996@kawaiiappcluster.l05hocs.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log('connection succesful')
        })
        .catch(() => {
            console.log('connection bad ' + err)
        })
    }
}

module.exports = new Database();