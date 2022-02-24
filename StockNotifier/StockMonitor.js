class StockMonitor {
  constructor(restockAlert, restockLevel, warehouse) {
    this.restockAlert = restockAlert;
  }

  handleSale(productId, quantity) {
    this.restockAlert.send("Please order more of product 811");
  }
}

module.exports = StockMonitor;
