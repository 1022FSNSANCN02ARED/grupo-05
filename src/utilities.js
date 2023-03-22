module.exports = {
  getFinalPrice: (product) => {
    const price = product.price - product.price * (product.discount / 100);
    return price.toLocaleString("es", { minimumFractionDigits: 2 });
  },
  getPrice: (product) => {
    return product.price.toLocaleString("es", { minimumFractionDigits: 2 });
  },
  getDiscount: (product) => {
    return product.discount.toLocaleString("es");
  },
  getPays: (product) => {
    return product.pays;
  },
  getPaysPrice: (product) => {
    const price = product.price / product.pays;
    return price.toLocaleString("es", { minimumFractionDigits: 2 });
  },

  getTotalPay: (products) => {
    const totalPay = products.reduce(
      (acumulador, product) => acumulador + product.price,
      0
    );

    return totalPay.toLocaleString("es", { minimumFractionDigits: 2 });
  },
};
