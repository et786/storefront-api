import { Product, ProductStore } from "../models/product";

const store = new ProductStore();

describe("Model for Products", () => {
  it("method 'store.index' should exist", () => {
    expect(store.index).toBeDefined();
  });


  it("method 'store.show' should exist", () => {
    expect(store.show).toBeDefined();
  });

  it("method 'store.create' should exist", () => {
    expect(store.create).toBeDefined();
  });

  it("method 'store.delete' should exist", () => {
    expect(store.delete).toBeDefined();
  });

  it("'store.create' should create a product record", async () => {
    const result = await store.create({
        name: "1 bunch of bananas",
        category: "food",
        price: 1.50
    });
    expect(result).toEqual({
        id: 1,
        name: "1 bunch of bananas",
        category: "food",
        price: 1.50,
    });
  });
  
  it("'store.show' should show product of id 1", async () => {
    const result = await store.show("1");
    expect(result).toEqual({ id: 1, name: '1 bunch of bananas', price: 1.5, category: 'food' });
  });


  it("'store.index' should return an array of products", async () => {
    try {
      const result = await store.index();
      expect(result).toEqual([{
        id: 1,
        name: "1 bunch of bananas",
        category: "food",
        price: 1.50,
    }]);
    } catch (error) {
      console.log(error);
    }
  });


  it("'store.delete' should delete product of id 1", async () => {
    store.delete("1");
    const result = await store.index();
    expect(result).toEqual([]);
  });
  
});
