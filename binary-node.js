class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    //check edge case for incoming value matching this.value
    if (value === this.value) return false;
    //check case of incoming value being greater than this.value
    //if so, pass value to the right and call add method
    if (value > this.value) {
      if (this.right) return this.right.add(value);
      this.right = new BinaryTreeNode(value);
      //otherwise, pass value to the left and call add method
    } else {
      if (this.left) return this.left.add(value);
      this.left = new BinaryTreeNode(value);
    }
    //upon successful placement, return true
    return true;
  }
}

class PersonTreeNode {
    constructor(person) {
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
      // implemented as in previous challenge
    }
  
    findPerson(name) {
      // Implement me!
    }
  }
  ```
