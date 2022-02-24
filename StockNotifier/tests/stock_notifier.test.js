const assert = require("assert");
const StockMonitor = require("../StockMonitor");

describe("Notify shop owner", () => {
  const restockLevel = {
    calculate: () => 24,
  };
  it("An alert is sent to order more", () => {
    const restockAlert = {
      send: function (message) {
        this.message = message;
      },
    };
    const warehouse = {
      getProduct: () => {
       return { stock: 25 }
      },
    };
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


  it("An alert is not sent", () => {
    const restockAlert = {
      send: function (message) {
        this.message = message;
      },
    };
    const warehouse = {
      getProduct: () => {
       return { stock: 26 }
      },
    };
    const stockMonitor = new StockMonitor(restockAlert, restockLevel, warehouse);
    stockMonitor.handleSale(811, 1);
    assert.strictEqual(restockAlert.message, undefined);
  });
});
