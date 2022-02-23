"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
var store = new user_1.UserStore();
describe("Model for Users", function () {
    it("method 'store.index' should exist", function () {
        expect(store.index).toBeDefined();
    });
    it("method 'store.show' should exist", function () {
        expect(store.show).toBeDefined();
    });
    it("method 'store.create' should exist", function () {
        expect(store.create).toBeDefined();
    });
    it("method 'store.delete' should exist", function () {
        expect(store.delete).toBeDefined();
    });
});
