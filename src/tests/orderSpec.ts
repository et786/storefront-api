import {Order, OrderStore } from "../models/order";

const store = new OrderStore();
/*
describe("Model for Orders", () => {
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

  it("'store.create' should create an order record", async () => {
    const result = await store.create({
        id: 1,
        status: "active",
        user_id: 1
    });
    expect(result).toEqual({
        id: 1,
        status: "active",
        user_id: 1
    });
  });

  it("'store.show' should show order of id 1", async () => {
    const result = await store.show(1);
    console.log(result)
    expect(result).toEqual({
      id: 1,
      status: "active",
      user_id: 1
    });
  });


  it("'store.index' should return an array of orders", async () => {
    try {
      const result = await store.index();
      expect(result).toEqual([{
        id: 1,
        status: "active",
        user_id: 1
      }]);
    } catch (error) {
      console.log(error);
    }
  });


  it("'store.delete' should delete order of id 1", async () => {
    store.delete("1");
    const result = await store.index();
    expect(result).toEqual([]);
  });
});
*/