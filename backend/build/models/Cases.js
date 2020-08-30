"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CasesSchema = new mongoose_1.Schema({
    title: String,
    link: String,
    coverImage: String,
    description: String,
}, { timestamps: true });
var Cases = mongoose_1.model('Cases', CasesSchema);
exports.default = Cases;
