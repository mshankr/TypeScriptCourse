import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { CollectionView } from "./views/CollectionView";
import { UserList } from "./views/UserList";
// const usersUrl = "http://localhost:3000/users";
import { UserShow } from "./views/UserShow";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({
  name: "tania",
  age: 50,
});

// const usersUrl = "http://localhost:3000/users";

const users = User.buildUserCollection();

users.on("change", () => {
  // console.log(users);

  const root = document.getElementById("root");
  if (root) {
    // console.log("Users loaded");
    // new UserShow(root, user).render();
    new UserList(root, users).render();
  } else {
    throw new Error("root element not found");
  }
});

users.fetch();
// const collection = User.buildUserCollection();
// collection.on("change", () => console.log(collection));
// collection.fetch();

// const user = User.buildUser({
//   id: 1,
//   //   name: "mishi",
//   //   age: 100,
// });

// Fetch is slower than setting it...

// user.fetch();

// setTimeout(function () {
//   user.set({
//     name: "duckduckgo",
//   });
//   console.log(user);
//   user.save();
// }, 5000);

// user.on("change", () => console.log("user changed, pls update the HTML"));

// user.fetch();
// user.set({ age: 22 });

// user.fetch();
// user.save();
