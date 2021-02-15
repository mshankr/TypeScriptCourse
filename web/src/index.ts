import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
const usersUrl = "http://localhost:3000/users";

const collection = User.buildUserCollection();
collection.on("change", () => console.log(collection));
collection.fetch();

// const user = User.buildUser({
//   id: 1,
//   name: "michuru",
//   age: 20,
// });

// user.on("change", () => console.log("user changed, pls update the HTML"));

// user.fetch();
// user.set({ age: 22 });

// user.fetch();
// user.save();
