const assert = require("assert");

class RestockLevel {
  constructor(salesHistory, today) {
    this.salesHistory = salesHistory;
    this.today = today;
  }

  calculate(product) {
    const todaysDate = new Date();
    todaysDate.setDate(this.today.date - 30);
    const totalSales = this.salesHistory.total(product, todaysDate);
    return (totalSales / 30) * product.leadTime;
  }
}

describe("Calculate restock level", () => {
  const salesHistory = {
    total: function (product, startDate, endDate) {
      this.startDate = startDate;
      return 15;
    },
  };
  const product = {
    leadTime: 14,
  };
  it("Returns stock level for a product", () => {
    const restockLevel = new RestockLevel(salesHistory);
    assert.strictEqual(restockLevel.calculate(product), 7);
  });

  it("Start date should be 30 days ago", () => {
    const todaysDate = Date.parse("February 24, 2022");
    const today = {
      date: () => todaysDate,
    };
    const startDate = Date.parse("January 25, 2022");
    new RestockLevel(salesHistory, today).calculate(product);
    assert.strictEqual(salesHistory.startDate, startDate);
  });
});
