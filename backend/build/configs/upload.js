"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var storage = multer_1.default.diskStorage({
    destination: path_1.default.resolve(__dirname, '..', '..', 'uploads'),
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    },
});
exports.default = {
    storage: storage,
};
