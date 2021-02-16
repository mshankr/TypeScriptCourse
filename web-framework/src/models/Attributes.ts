import { UserProps } from "./User";
export class Attributes<T> {
  constructor(private data: T) {}

  // K can only be keys of T
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update); // if have in Update, will overwrite in current data
  };

  getAll = (): T => this.data;
}

const attrs = new Attributes<UserProps>({
  name: "michi",
  age: 34,
});

const name = attrs.get("name");
