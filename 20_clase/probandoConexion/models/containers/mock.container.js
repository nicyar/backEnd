const MemoryContainer = require("./memory.container");
const { createFakeUser } = require("../utils/products.utils");


class MockContainer extends MemoryContainer {
  constructor(resource) {
    super(resource)
  }

  populate(qty = 50) {
    this.items = [];
    for (let i = 1; i <= qty; i++) {
      const newItem = createFakeUser();
      this.items.push(newItem);
    }
    return this.items;
  }

  save(_item) {
    const newUser = createFakeUser();
    this.items.push(newUser);
    return newUser;
  }
}

module.exports = MockContainer;