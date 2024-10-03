console.log("Task 1 starts from here");

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  getBalance() {
    return this.balance;
  },

  getDiscount() {
    return this.discount;
  },

  setDiscount(value) {
    this.discount = value;
  },

  getOrders() {
    return this.orders;
  },

  addOrder(cost, order) {
    this.balance -= cost * this.discount;
    this.orders.push(order);
  },
};

let newLine = "\n";

customer.setDiscount(0.15);
console.log(customer.getDiscount());
customer.addOrder(5000, "Steak");
console.log(customer.getBalance());
console.log(customer.getOrders());
console.log(newLine);
