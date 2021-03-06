import { Sorter } from "./Sorter.js";
import { NumbersCollection } from "./NumbersCollection.js";
import { CharactersCollection } from "./CharactersCollection.js";
import { LinkedList } from "./LinkedList.js";

const myNumbers = new NumbersCollection([10, 2, 4, -3, -10]);
const myString = new CharactersCollection("LSZJKFjlkdjflskkazl");
const myLinkedList = new LinkedList();
myLinkedList.add(10);
myLinkedList.add(9);
myLinkedList.add(8);
myLinkedList.add(5);
myLinkedList.add(6);
myLinkedList.add(7);
myLinkedList.add(8);

myNumbers.sort();
myString.sort();
myLinkedList.sort();

console.log(myNumbers);
console.log(myString);
myLinkedList.print();

// const sorter = new Sorter(myLinkedList);
// sorter.sort();
// myLinkedList.print();
