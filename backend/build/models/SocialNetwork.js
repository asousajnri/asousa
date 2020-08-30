"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SocialNetworkSchema = new mongoose_1.Schema({
    title: String,
    link: String,
}, { timestamps: true });
var SocialNetwork = mongoose_1.model('SocialNetwork', SocialNetworkSchema);
exports.default = SocialNetwork;
