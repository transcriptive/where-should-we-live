const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dailySchema = new Schema (
  {
    date: Date,
    netsales: Number, 
    carcount: Number, 
    labor: Number,
  }, {
    timestamps: true
});

const storeSchema = new Schema(
  {
    name: {
      type: String,
      required: true, 
    },
    storeNum: Number, 
    street: String,
    city: String,
    state: String, 
    zip: Number,
    website: String,
    google: String, 
    dailysales: [dailySchema],
    manager: [{type: Schema.Types.ObjectId, ref: 'User'}],
    owner: [{type: Schema.Types.ObjectId, ref: 'User'}],    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Store", storeSchema);