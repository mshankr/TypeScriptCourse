import { Sorter } from "./Sorter.js";
export class CharactersCollection extends Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    /**
     * Do I swap these two char or not?
     * What is the Comparison factor?
     * A: If left > right
     * e.g. 'a' and 'b' --> 'a' > 'b' ? NO, do not swap.
     * @param leftIndex of char in the string
     * @param rightIndex of char in the string
     * @returns
     */
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split("");
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join("");
    }
}
