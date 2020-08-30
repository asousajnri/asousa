"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SkillsSchema = new mongoose_1.Schema({
    title: String,
    logo: String,
    level: String,
}, { timestamps: true });
var Skills = mongoose_1.model('Skills', SkillsSchema);
exports.default = Skills;
