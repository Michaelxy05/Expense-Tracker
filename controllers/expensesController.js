const db = require("../models");

//================================================================================
//We can AGGREGATE in here.. db.reactexpenselist.aggregate(req.params.id)

// db.reactexpenselist.aggregate(
//   [
//      {
//        $group : {
//           _id : null,
//           amount: { $sum: { "$amount" } }
//        }
//      }
//   ]
// )

// The result would be this==================

// { "_id" : null, "totalPrice" : 290, "averageQuantity" : 8.6, "count" : 5 }
//=====================================================================================

// Defining methods for the expensesController
module.exports = {
  findAll: function(req, res) {
    db.Expense
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Expense
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Expense
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Expense
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Expense
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
