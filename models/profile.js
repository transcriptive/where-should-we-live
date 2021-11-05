const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    movingFrom: String, 
    language: String,
    recentCounties: [String],
    dateFormat: {
      type: [String],
      enum: ["DD-MM-YYYY", "MM-DD-YYYY", ],
    },
    groups: [String],
    byUser: [{type: Schema.Types.ObjectId, ref: 'User'}],    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);