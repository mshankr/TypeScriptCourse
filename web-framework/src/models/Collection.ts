import axios, { AxiosResponse } from "axios";
// import { User, UserProps } from "./User";
import { Eventing } from "./Eventing";
// const usersUrl = "http://localhost:3000/users";

// T = Collection of X
// K = X in deserialized format (Object structure)
// e.g. name, age, id
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((json: K) => {
        this.models.push(this.deserialize(json));
      });
      this.trigger("change");
    });
  }
}
