"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CasesController_1 = __importDefault(require("./CasesController"));
var ProfileController_1 = __importDefault(require("./ProfileController"));
var SocialNetworkController_1 = __importDefault(require("./SocialNetworkController"));
var SkillsController_1 = __importDefault(require("./SkillsController"));
var CareerController_1 = __importDefault(require("./CareerController"));
var ContactController_1 = __importDefault(require("./ContactController"));
exports.default = {
    Contact: ContactController_1.default,
    Career: CareerController_1.default,
    Skills: SkillsController_1.default,
    Cases: CasesController_1.default,
    Profile: ProfileController_1.default,
    SocialNetwork: SocialNetworkController_1.default,
};
