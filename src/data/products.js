const fs = require("fs");
const path = require("path");

//crea la ruta al JSON con los datos y la guarda
const productsFilePath = path.join(__dirname, "productsDataBase.json");

//Lee y codifica el archivo
//const productsFileContent = fs.readFileSync(productsFilePath, "utf-8");

//Parcea el archivo
//const products = JSON.parse(productsFileContent);

module.exports = {
  findAll() {
    const productsFileContent = fs.readFileSync(productsFilePath, "utf-8");
    const products = JSON.parse(productsFileContent);
    return products;
  },
  saveProduct(product) {
    const products = this.findAll();
    products.push(product);
    const productsFileContent = JSON.stringify(products, null, 4);
    fs.writeFileSync(productsFilePath, productsFileContent, "utf-8");
  },
  findById(id) {
    return this.findAll().find((theProduct) => theProduct.id == id);
  },
  deleteProduct(idProducts) {
    let products = this.findAll();

    products = products.filter((theProduct) => theProduct.id !== idProducts);
    const productsFileContent = JSON.stringify(products, null, 4);
    fs.writeFileSync(productsFilePath, productsFileContent, "utf-8");
  },
};
