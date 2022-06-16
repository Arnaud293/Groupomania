const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@ocp7.5lcamya.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log("Failed to connect to MongoDB", error));
