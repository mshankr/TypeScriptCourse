import express, { Request, Response, Router, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

// middleware
const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
};

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
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
    `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "123@123.com" && password === "123") {
    // mark the person as logged in
    req.session = { loggedIn: true };

    // redirect them to the root route
    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/logout", (req: Request, res: Response) => {
  // How to reset cookies:
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, authorized user!");
});

router.get("/", (req: Request, res: Response) => {
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
});

// to export a variable that's already created:
export { router };
