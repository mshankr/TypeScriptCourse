import { Sorter } from "./Sorter.js";
export class NumbersCollection extends Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    /**
     * does these 2 numbers need to be swapped?
     * if left > right, YES, need to swap.
     * @param leftIndex index of left number
     * @param rightIndex index of right number in array
     */
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
