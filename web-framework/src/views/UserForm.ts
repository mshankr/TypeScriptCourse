import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  // return an object
  // whose keys are all strings
  // and whose values are all functions that take nothing and return nothing
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save": this.onSave,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSave = (): void => {
    this.model.save();
  };

  template(): string {
    return `
            <div>
            <input placeholder="${this.model.get("name")}" />
            <button class="set-name">Change name</button>
            <button class="set-age">Randomly set age</button>
            <button class="save">SAVE</button>
            
            </div>
        `;
  }
}
