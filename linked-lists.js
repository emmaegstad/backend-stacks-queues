class LinkedListNode {
  constructor(data) {
    this.#data = data;
    this.#next = null;
  }

  add(node) {
    //check for exisiting #next
    if (this.#next) {
      //if there is no #next, add node
      this.#next = node;
    } else {
      //if there is, pass node to exisiting #next recursively
      this.#next.add(node);
    }
  }
}
