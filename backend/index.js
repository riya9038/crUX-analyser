const express = require("express");
const cors = require("cors");
const cruxRouter = require("./routes/cruxRoutes");
const config = require("./config");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/crux", cruxRouter);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
