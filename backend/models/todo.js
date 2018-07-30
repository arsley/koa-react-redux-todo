const mongoose = require('mongoose');

// Declare schema
const TodoSchema = new mongoose.Schema(
  {
    description: { type: String },
    done: { type: Boolean }
  },
  { timestamps: true }
);

// Declare model to mongoose schema
const Todo = mongoose.model('Todo', TodoSchema);

// export
module.exports = mongoose.model('Todo');
