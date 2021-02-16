import { Model } from "../models/Model";
import { User } from "../models/User";

// interface ModelForView {
//   on(eventName: string, callback: () => void): void;
// }

export abstract class View<T extends Model<K>, K> {
  // className : Element itself
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  // className : selector
  // userShow : .user-show
  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  abstract template(): string;

  bindModel = (): void => {
    this.model.on("change", () => {
      this.render();
    });
  };

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      // in the fragment you received, try to find the thingy described in eventsMap

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  onRender = (): void => {};

  mapRegions = (fragment: DocumentFragment): void => {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];

      // find the selector in my template
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  };

  render = (): void => {
    this.parent.innerHTML = "";
    // take a string and turn it into a HTML element
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();

    this.parent.append(templateElement.content);
  };
}
