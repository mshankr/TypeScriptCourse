import { Middleware, Req, Res } from "@tsed/common";

@Middleware()
export class requireAuth {
  use(@Req() req: Req, res: Res) {
    if (req.session && req.session.loggedIn) {
      return;
    }

    res.status(403);
    res.send("Not permitted");
  }
}
