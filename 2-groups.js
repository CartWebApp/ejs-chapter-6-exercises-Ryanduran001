/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

class Group {
    constructor(arr) {
      this.arr = arr;
    }
    static from([x, y]) {
      let arr = []
      if(x > y) {
        for (y; y <= x; y++) {
          arr.push(y)
        }
        return new Group(arr)
      }
      else {
        for (x; x <= y; x++) {
          arr.push(x)
        }
        return new Group(arr)
      }
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
      if (this.has(t)) { // only splice array when item is found
       this.arr.splice(this.arr.indexOf(t), 1);
      }
    }
  }
  

  // Tests:
  let group = Group.from([-29, 8]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false

