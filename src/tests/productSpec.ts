import { Product, ProductStore } from "../models/product";

const store = new ProductStore();

describe("Index of products", () => {
  it("should exist", () => {
    expect(store.index).toBeDefined();
  });

  it("should return an array of products", async () => {
    try {
      const result = await store.index();
      // console.log(result);
      expect(result).toEqual([]);
    } catch (error) {
      console.log(error);
    }
  });
});

describe("Show products", () => {
  it("should have method show", () => {
    expect(store.show).toBeDefined();
  });

  it("should have method create", () => {
    expect(store.create).toBeDefined();
  });

  it("should have method delete", () => {
    expect(store.delete).toBeDefined();
  });
});

describe("Create product", () => {
  it("should have method create", () => {
    expect(store.create).toBeDefined();
  });
});

describe("Delete product", () => {
  it("should have method delete", () => {
    expect(store.delete).toBeDefined();
  });
});
