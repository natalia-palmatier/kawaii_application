const mongoose = require('mongoose');

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://newuser:littlebopeep@cluster0.woxvsat.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log('connection succesful')
        })
        .catch(() => {
            console.log('connection bad ' + err)
        })
    }
}

module.exports = new Database();