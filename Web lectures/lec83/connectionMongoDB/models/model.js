const {Schema,model} = require("mongoose");

const MySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  age:{
    type: Number,
    required:true
  },
  weight:{
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TaskModel = model("test", MySchema)

module.exports = TaskModel