class StockMonitor {
  constructor(restockAlert, restockLevel, warehouse) {
    this.restockAlert = restockAlert;
    this.restockLevel = restockLevel;
    this.warehouse = warehouse;
  }

  handleSale(productId, quantity) {
    const product = this.warehouse.getProduct(productId);
    if (product.stock - quantity <= this.restockLevel.calculate(product)) {
      this.restockAlert.send("Please order more of product 811");
    }
  }
}

module.exports = StockMonitor;
