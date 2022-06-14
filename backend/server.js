const express = require("express");

require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const app = express();

// Routes

app.use("/api/user", userRoutes);

// Server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
