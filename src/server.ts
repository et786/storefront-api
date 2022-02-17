import express from "express";
//import router from "./routes/router";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app: express.Application = express();
const port = 7861;
const address = `0.0.0.0:${port}`;

// Server middleware
app.use(bodyParser.json());
//app.use("/", router);

// Start server
app.listen(port, function () {
  console.log(`Server listening on ${address}...`);
});

export default app;
