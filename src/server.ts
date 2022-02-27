import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import productRoutes from "./handlers/products";
import orderRoutes from "./handlers/orders";
import userRoutes from "./handlers/users";

const app: express.Application = express();
const port = 7861;
const address = `0.0.0.0:${port}`;

// Server middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Handler initialization for products, orders, and users

productRoutes(app);
orderRoutes(app);
userRoutes(app);

// Start server
app.listen(port, function () {
  console.log(`Server listening on ${address}...`);
});

export default app;
