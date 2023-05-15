const db = require("../../database/models");

module.exports = {
  async showCart(req, res) {
    const products = await db.CartProduct.findAll();

    res.render("cart", { products });
  },

  async addProduct(req, res) {
    const productId = req.params.id;
    const products = await db.CartProduct.findAll({
      where: { userId: req.session.userLog.id },
    });
    const productInCartModify = products.find(
      (prodInCart) => prodInCart.productId == productId
    );
    if (productInCartModify) {
      productInCartModify.amount++;
      await productInCartModify.save();
    } else {
      await db.CartProduct.create({
        userId: req.session.userLog.id,
        productId: productId,
        amount: 1,
      });
    }
    res.json({ cart: products });
  },

  async decreaseProduct(req, res) {
    const productId = req.params.id;
    //Verificar si el producto está agregado
    const products = await CartProduct.findOne({
      where: {
        userId: req.userLog.id,
        productId: productId,
      },
    });

    if (productInCartToModify) {
      // Si está agregado: Disminuir el contador de ese Producto
      // Si el contador es 1, removerlo de la lista completamente.
      if (productInCartToModify.amount == 1) {
        await productInCartToModify.destroy();
      } else {
        productInCartToModify.amount--;
        await productInCartToModify.save();
      }
    }

    res.json({ cart: products });
  },
};
