import express, { Request, Response, Router, NextFunction } from "express";
import { get } from "./decorators/routes";
import { controller } from "./decorators/controller";

@controller("/auth")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(`    
    <div>
      <h3>You are logged in.</h3>
      <a href="/logout">Logout</a>
    </div>
    `);
    } else {
      res.send(`    
    <div>
      <h3>You are not logged in.</h3>
      <a href="/login">Login</a>
    </div>
    `);
    }
  }
}
