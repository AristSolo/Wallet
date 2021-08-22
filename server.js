//Import required dependencies
const express = require("express");
//
const app = express();
//
const { users,business, wallets } = require("./routes");

// Enabling CORS for web access
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT,PATCH"
  );
  next();
});

// Linking body parser for url reading
app.use(
  express.urlencoded({
    extended: false,
    limit: "5gb",
  })
);

app.use(
  express.json({
    limit: "5gb",
  })
);

 app.use("/users", users);
 app.use("/business", business);
 app.use("/wallet",wallets);

const port = process.env.PORT || 5008;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});