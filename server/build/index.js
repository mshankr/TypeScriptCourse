"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = express_1.default();
app.use(cookie_session_1.default({ keys: ["sdzfklasj"] }));
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(loginRoutes_1.router);
app.listen(3000, () => console.log("listening on port 3000"));
