import { User } from "./models/User";

const user = new User({ id: 1 });

user.on("change", () => console.log("user changed, pls update the HTML"));

user.fetch();
user.set({ age: 22 });

// user.fetch();
user.save();
