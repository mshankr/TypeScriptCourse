import {
  Controller,
  Get,
  Post,
  BodyParams,
  Session,
  Redirect,
} from "@tsed/common";
import { BadRequest, Forbidden } from "@tsed/exceptions";
import CookieSessionInterfaces from "cookie-session";

@Controller("/auth")
export class LoginController {
  @Get("/login")
  getLogin() {
    return `
   <form method="post">
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" />
    </div>
    <button type="submit">Submit</button>
  </form>
    `;
  }

  @Redirect("/rest")
  @Post("/login")
  postLogin(
    @BodyParams("email") email: string,
    @BodyParams("password") password: string,
    @Session("user") user: { loggedIn: boolean }
  ) {
    if (email === "123@123.com" && password === "123") {
      user.loggedIn = true;
      return;
    }
    throw new Forbidden("Wrong credentials");
  }

  @Redirect("/rest/auth/login")
  @Get("/logout")
  getLogout(@Session("user") user: { loggedIn: boolean }) {
    user.loggedIn = false;
    return;
  }
}
