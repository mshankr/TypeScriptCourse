import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  // return an object
  // whose keys are all strings
  // and whose values are all functions that take nothing and return nothing
  template = (): string => {
    return `
            <div>
            <h1>User Details</h1>
            <p>Name: ${this.model.get("name")}</p>
            <p>Age: ${this.model.get("age")}</p>
            </div>
        `;
  };
}
