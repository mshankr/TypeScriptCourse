import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
  name?: string; // ? makes property optional
  age?: number;
  id?: number;
}

const usersUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(usersUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(usersUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge = (): void => {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  };
}

// COMPOSITION method: Not recommended here

// export class User {
//   public attributes: Attributes<UserProps>;
//   public events: Eventing = new Eventing();
//   public sync: Sync<UserProps> = new Sync<UserProps>(dbUrl);

//   constructor(attrs: UserProps) {
//     this.attributes = new Attributes<UserProps>(attrs);
//   }

//   get get() {
//     return this.attributes.get;
//   }

//   set(update: UserProps): void {
//     this.attributes.set(update);
//     this.events.trigger("change");
//   }

//   fetch(): void {
//     const id = this.attributes.get("id");

//     if (typeof id !== "number") {
//       throw new Error("Cannot fetch without an id");
//     }

//     this.sync.fetch(id).then((response: AxiosResponse): void => {
//       this.set(response.data);
//     });
//   }

//   save(): void {
//     this.sync
//       .save(this.attributes.getAll())
//       .then((response: AxiosResponse): void => {
//         this.trigger("save");
//       })
//       .catch(() => {
//         this.trigger("error");
//       });
//   }

//   get on() {
//     return this.events.on;
//   }

//   get trigger() {
//     return this.events.trigger;
//   }
// }
