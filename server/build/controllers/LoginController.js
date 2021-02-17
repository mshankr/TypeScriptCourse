"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const routes_1 = require("./decorators/routes");
const controller_1 = require("./decorators/controller");
let LoginController = class LoginController {
    getLogin(req, res) {
        if (req.session && req.session.loggedIn) {
            res.send(`    
    <div>
      <h3>You are logged in.</h3>
      <a href="/logout">Logout</a>
    </div>
    `);
        }
        else {
            res.send(`    
    <div>
      <h3>You are not logged in.</h3>
      <a href="/login">Login</a>
    </div>
    `);
        }
    }
};
__decorate([
    routes_1.get("/login"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getLogin", null);
LoginController = __decorate([
    controller_1.controller("/auth")
], LoginController);
exports.LoginController = LoginController;
