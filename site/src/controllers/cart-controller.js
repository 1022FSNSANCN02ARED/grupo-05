const db = require("../../database/models");

module.exports = {
  async showCart(req, res) {
    const products = await db.CartProduct.findAll({
      where: {
        userId: req.session.userLog.id,
      },
      include: ["product"],
    });

    res.render("user/cart", {
      cart: products,
      totalPrice: products.reduce(
        (acc, products) => acc + products.product.price * products.amount,
        0
      ),
    });
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
    res.redirect("/cart");
  },

  async decreaseProduct(req, res) {
    const productId = req.params.id;
    //Verificar si el producto está agregado
    const productsIn = await db.CartProduct.findOne({
      where: {
        userId: req.session.userLog.id,
        productId: productId,
      },
    });

    if (productsIn) {
      // Si está agregado: Disminuir el contador de ese Producto
      // Si el contador es 1, removerlo de la lista completamente.
      if (productsIn.amount == 1) {
        await productsIn.destroy();
      } else {
        productsIn.amount--;
        await productsIn.save();
      }
    }

    res.redirect("/cart");
  },

  async clearProductFromCart(req, res) {
    const productId = req.params.id;
    const productInToClear = await db.CartProduct.findOne({
      where: {
        userId: req.session.userLog.id,
        productId: productId,
      },
    });

    if (productInToClear) await productInToClear.destroy();

    res.redirect("/cart");
  },

  async clearCart(req, res) {
    await db.CartProduct.destroy({
      where: {
        userId: req.session.userLog.id,
      },
    });
    res.redirect("/cart");
  },
};
