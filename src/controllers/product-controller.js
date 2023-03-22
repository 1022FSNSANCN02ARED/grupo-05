const products = require("../data/products");
const crypto = require("crypto");

const uuid = crypto.randomUUID();

module.exports = {
  myProducts: (req, res) => {
    res.render("products/my-products", { products: products.findAll() });
  },

  detail: (req, res) => {
    const product = products.findById(req.params.id);
    res.render("products/detail", { product });
  },

  createProduct: (req, res) => {
    res.render("products/create-product");
  },

  storeProduct: (req, res) => {
    const product = {
      id: uuid,
      ...req.body,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: req.file ? req.file.filename : "default-imag.png",
    };
    products.saveProduct(product);
    res.redirect("/");
  },

  showEditProduct: (req, res) => {
    const product = products.findById(req.params.id);
    res.render("products/edit-product", { product });
  },
  editProduct: (req, res) => {
    const product = req.body;
    res.send(product);
  },
  deleteProduct: (req, res) => {
    products.deleteProduct(req.params.id);
    res.redirect("/");
  },

  showCart: (req, res) => {
    res.render("products/cart", { products: products.findAll() });
  },

  showCategories: (req, res) => {
    res.render("products/categories", {
      category: products.findAll().filter((theProducts) => {
        return theProducts.category == req.params.id;
      }),
    });
  },
};
