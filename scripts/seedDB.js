const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Expenses collection and inserts the expenses below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactexpenselist"
);

const Seed = [
  
];

db.Expense
  .remove({})
  .then(() => db.Expense.collection.insertMany(Seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
