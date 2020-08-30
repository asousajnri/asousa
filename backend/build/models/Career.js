"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CareerSchema = new mongoose_1.Schema({
    companyName: String,
    logo: String,
    office: String,
    startYear: String,
    endYear: String,
}, { timestamps: true });
var Career = mongoose_1.model('Carrer', CareerSchema);
exports.default = Career;
