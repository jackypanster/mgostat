'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

mongoose.connection.on('connected', function () {
    console.log('mongoose connection connected');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.error('mongoose connection error', err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.error('mongoose connection disconnected');
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    {reconnectTries: Number.MAX_VALUE, useMongoClient: true},
    function (err) {
        if (err) {
            console.error('fail to connect mongodb', err);
        }
    });

const MessageSchema = new Schema({}, {
    strict: false,
    collection: 'messages'
});

const Message = mongoose.model('Message', MessageSchema);

Message.aggregate([
    {
        $match:
            {
                'date': '11/16/2017'
            }
    },
    {
        $group:
            {
                _id: {'status': '$status', 'date': '$date'},
                total: {$sum: 1}
            }
    }
], function (err, result) {
    if (err) {
        console.error(err)
    } else {
        console.log(result)
    }
});