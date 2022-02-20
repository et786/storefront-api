"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import router from "./routes/router";
var body_parser_1 = __importDefault(require("body-parser"));
var products_1 = __importDefault(require("./handlers/products"));
var orders_1 = __importDefault(require("./handlers/orders"));
var users_1 = __importDefault(require("./handlers/users"));
var app = (0, express_1.default)();
var port = 7861;
var address = "0.0.0.0:".concat(port);
// Server middleware
app.use(body_parser_1.default.json());
// Handler initialization for products, orders, and users
(0, products_1.default)(app);
(0, orders_1.default)(app);
(0, users_1.default)(app);
// Start server
app.listen(port, function () {
    console.log("Server listening on ".concat(address, "..."));
});
exports.default = app;
