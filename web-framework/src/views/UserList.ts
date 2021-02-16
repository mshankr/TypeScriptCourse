import { Collection } from "../models/Collection";
import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";
import { Model } from "../models/Model";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem = (model: User, itemParent: Element): void => {
    new UserShow(itemParent, model).render();
  };
}
