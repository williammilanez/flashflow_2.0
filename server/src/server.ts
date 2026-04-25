import express from "express";
import { initializeDatabase } from "./database/database";

const app = express();

initializeDatabase();

app.listen(3333, () => {
  console.log("Server running on port 3333");
});
