class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  add(node) {
    //check for exisiting #next
    if (this.next) {
      //if there is no #next, add node
      this.next = node;
    } else {
      //if there is, pass node to exisiting #next recursively
      this.next.add(node);
    }
  }

  getList() {
    //should return a string with list of values in order
    const list = '';
    //add this to string
    list + this.data;
    //check for next
    if (this.next) {
      //if next exists, call getList on it
      this.getList(this.next);
    } else {
      //if there is not a next, return string
      return list;
    }
  }
}
