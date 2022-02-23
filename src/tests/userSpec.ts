import { UserStore } from "../models/user";

const store = new UserStore();

describe("Model for Users", () => {
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
});