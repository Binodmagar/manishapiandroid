const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    account:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model("Income", incomeSchema);