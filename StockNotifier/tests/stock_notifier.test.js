const assert = require("assert");
const StockMonitor = require("../StockMonitor");

describe("Notify shop owner", () => {
  const restockAlert = {
    send: function (message) {
      this.message = message;
    },
  };
  const restockLevel = {
    calculate: () => 24,
  };
  const warehouse = {
    getProduct: () => {
      stock: 25;
    },
  };
  it("An alert is sent to order more", () => {
    const stockMonitor = new StockMonitor(
      restockAlert,
      restockLevel,
      warehouse
    );
    stockMonitor.handleSale(811, 1);
    assert.strictEqual(
      restockAlert.message,
      "Please order more of product 811"
    );
  });
});
