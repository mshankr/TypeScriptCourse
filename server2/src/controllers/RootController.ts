import {
  Controller,
  Get,
  Post,
  BodyParams,
  Session,
  Redirect,
} from "@tsed/common";
import CookieSessionInterfaces from "cookie-session";

@Controller("")
export class RootController {
  @Get("/")
  getRoot(@Session("user") user: { loggedIn: boolean }) {
    if (user.loggedIn) {
      return `
        <div>
          <div>You are logged in</div>
          <a href="/rest/auth/logout">Logout</a>
        </div>
      `;
    } else {
      return `
        <div>
          <div>You are not logged in</div>
          <a href="/rest/auth/login">Login</a>
        </div>
      `;
    }
  }
}
