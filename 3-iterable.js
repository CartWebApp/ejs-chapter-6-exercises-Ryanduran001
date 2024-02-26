/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)
class Group {
  constructor(arr) {
    this.arr = arr;
  }
  static from(arr) {  
    // if(x > y) {
    //   for (y; y <= x; y++) {
    //     arr.push(y)
    //   }
    //   return new Group(arr)
    // }
    // else {
    //   for (x; x <= y; x++) {
    //     arr.push(x)
    //   }
    //   return new Group(arr)
    // }
    return(arr);
  }
  has(n) {
    return this.arr.includes(n)
  }
  add(i) {
    if(!this.has(i)) {
      this.arr.push(i);
    }
    return this
  }
  delete(t) {
    if (this.has(t)) { 
     this.arr.splice(this.arr.indexOf(t), 1);
    }
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(list) {
    this.list = list
    this.position = 0
    this.value = this.list[this.position]
    this.done = false
  }
  next() {
    if(this.list.length = this.position) {
      return this.done = true
    }
    return {value: this.value, done: this.done}
  }
}


// Tests:
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c