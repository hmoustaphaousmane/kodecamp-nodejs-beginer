class ProvisionStore {
  #shopName;
  #location;
  products = [
    {
      id: 1,
      productName: "product",
      cost: 121,
      stockStatus: "in-stock",
      createAt: "2025-07-02T11:07:56.624Z",
    },
    {
      id: 2,
      productName: "product 2",
      cost: 22,
      stockStatus: "out-of-stock",
      createAt: "2025-05-04T11:05:12.234Z",
    },
  ];

  constructor(shopName, location) {
    this.#shopName = shopName;
    this.#location = location;
  }

  viewProducts() {
    return this.products;
  }

  viewOneProduct(id) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return this.products[i];
      }
    }
    throw new Error("Product not found");
  }

  addProduct(productName, cost, stockStatus) {
    const allowedStatus = ["in-stock", "low-stock", "out-of-stock"];
    if (allowedStatus.includes(stockStatus)) {
      this.products.push({
        id: Math.floor(Math.random() * 1000001),
        productName,
        cost,
        stockStatus,
        createAt: new Date(),
      });
    } else {
      throw new Error(
        `The products stock status should be one the followings: ${allowedStatus}`
      );
    }
  }

  editProduct(id, newProductName, newCost) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.products[i].productName = newProductName;
        this.products[i].cost = newCost;
      }
    }
  }

  editProductStockStatus(id, newStockStatus) {
    const allowedStatus = ["in-stock", "low-stock", "out-of-stock"];
    this.products.forEach((product) => {
      if (product.id == id) {
        if (allowedStatus.includes(newStockStatus)) {
          product.stockStatus = newStockStatus;
        } else {
          throw new Error(
            `The products stock status should be one the followings: ${allowedStatus}`
          );
        }
      }
    });
  }

  removeProduct(id) {
    const updatedProducts = [];

    this.products.forEach((product) => {
      if (product.id != id) {
        updatedProducts.push(product);
      }
    });
    this.products = updatedProducts;
  
    return "Product deleted successfully.";
  }
}

const myStore = new ProvisionStore("My Shop", "My location");

// console.log(myStore.shopName, myStore.location);

// console.log(myStore.viewProducts());

// console.log(myStore.viewOneProduct(2));

// myStore.addProduct("new product", 235, "in-stock");
// console.log(myStore.viewProducts());
// myStore.addProduct("new product", 235, "sin-stock");
// console.log(myStore.viewProducts());

// myStore.editProduct(2, "edited product name", 235);
// console.log(myStore.viewOneProduct(2));

// myStore.editProductStockStatus(2, "out-of-stock");
// myStore.editProductStockStatus(2, "out-of-of-stock");

// console.log(myStore.removeProduct(1));
// console.log(myStore.viewProducts());

// class MyBank {
//     customerName;
//     constructor(customerName) {
//         this.customerName = customerName;
//     }
// }

// const myBank1 = new MyBank("Victor Peter");

// console.log(myBank1);
