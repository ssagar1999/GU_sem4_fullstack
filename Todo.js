let mongoose = require("mongoose");
let TodoSchema = new mongoose.Schema({
    value: String,
    priority: {
        type: String,
        enum: ["high", "medium", "low"]
    }
});
let Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;