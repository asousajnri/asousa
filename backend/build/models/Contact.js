"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ContactSchema = new mongoose_1.Schema({
    inputs: [
        {
            label: String,
            inputType: String,
            inputValue: String,
            inputPlaceholder: String,
        },
    ],
    banner: {
        title: String,
        text: String,
        emphasis: String,
    },
}, { timestamps: true });
var Contact = mongoose_1.model('Contact', ContactSchema);
exports.default = Contact;
