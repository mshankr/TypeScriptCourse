import { Sorter } from "./Sorter.js";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  /**
   * does these 2 numbers need to be swapped?
   * if left > right, YES, need to swap.
   * @param leftIndex index of left number
   * @param rightIndex index of right number in array
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
