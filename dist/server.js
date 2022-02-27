"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var products_1 = __importDefault(require("./handlers/products"));
var orders_1 = __importDefault(require("./handlers/orders"));
var users_1 = __importDefault(require("./handlers/users"));
var app = (0, express_1["default"])();
var port = 7861;
var address = "0.0.0.0:".concat(port);
// Server middleware
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: false }));
// Handler initialization for products, orders, and users
(0, products_1["default"])(app);
(0, orders_1["default"])(app);
(0, users_1["default"])(app);
// Start server
app.listen(port, function () {
    console.log("Server listening on ".concat(address, "..."));
});
exports["default"] = app;
