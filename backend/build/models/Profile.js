"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProfileSchema = new mongoose_1.Schema({
    photo: String,
    name: String,
    office: String,
}, {
    timestamps: true,
});
var Profile = mongoose_1.model('Profile', ProfileSchema);
exports.default = Profile;
