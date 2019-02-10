const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const Moment = require("react-moment");

const expenseSchema = new Schema({
  amount: { type: Number, required: true },
  reason: { type: String, required: true },
  noteToSelf: String,
  date: { type: Date, default: Date.now }
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
