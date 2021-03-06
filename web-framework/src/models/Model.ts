import { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

type Callback = () => void;

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(value: T): void;
  getAll(): T;
}

interface Eventing {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Eventing,
    private sync: Sync<T>
  ) {}

  get get() {
    return this.attributes.get;
  }

  // Pass-through methods:
  // Since ModelAttributes is initialized in constructor,
  // you can do this:
  // get = this.attributes.get

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}
