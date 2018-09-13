class Sorter {
  constructor() {
    this.storage = [];
  }

  add(element) {
    this.storage.push(element);
  }

  at(index) {
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }

  toArray() {
    return this.storage;
  }

  sort(indices) {
    let newArr = [];
    newArr = this.storage.filter((el, i) => indices.indexOf(i) !== -1);
    if (this.comparator !== undefined) {
      newArr.sort(this.comparator);
    } else {
      newArr.sort((a, b) => a - b);
    }

    this.storage.forEach((el, i) => {
      if (indices.indexOf(i) !== -1) this.storage[i] = newArr.shift();
    });
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;

