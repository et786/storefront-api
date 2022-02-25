import {Order, OrderStore } from "../models/order";
import { UserStore } from "../models/user";

const orderStore = new OrderStore();

const userStore = new UserStore();


describe("Model for Orders", () => {


  it("method 'store.index' should exist", () => {
    expect(orderStore.index).toBeDefined();
  });


  it("method 'store.show' should exist", () => {
    expect(orderStore.show).toBeDefined();
  });

  it("method 'store.create' should exist", () => {
    expect(orderStore.create).toBeDefined();
  });

  it("method 'store.delete' should exist", () => {
    expect(orderStore.delete).toBeDefined();
  });

  

  it("'store.create' should create an order record tied to user and store it in user_orders table", async () => {

    const userResult = await userStore.create({
      username: "atsyed94", 
      firstName: "Ahmed", 
      lastName: "Syed",
      password: "ilovemath71" 
    });
    
    const userOrdersResult = await userStore.addOrder(1, "1", "2");

    console.log(userOrdersResult);
   

    expect(userOrdersResult.id).toEqual(1);
  });

  it("'store.show' should show order of id 1", async () => {
    const result = await orderStore.show(1);
    
    expect(result).toEqual({
      id: 1,
      status: "active",
      user_id: 1
    });
  });


  it("'store.index' should return an array of orders", async () => {
    try {
      const result = await orderStore.index();
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
    await orderStore.delete("1");
    const result = await orderStore.index();
    expect(result).toEqual([]);
  });
});
