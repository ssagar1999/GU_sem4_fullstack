let express = require('express');
let mongoose= require('mongoose');
const Todo = require('./Todo');
let app = express();
app.use(express.static('public'));
app.use(express.json());

mongoose.connect('mongodb+srv://shu:shu@cluster0.3kifbax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to DB'); 
})
//get todos from db
app.get('/getTodos', (req, res) => {
    Todo.find({}).then(data =>{
        res.json(data)
    })
});

app.post('/addTodo', (req, res) => {
    let todo = req.body;
    let newTodo = new Todo({
        value: todo.value,
        priority: todo.priority
    });
    newTodo.save();
    res.json({message: 'Todo added'});
})

app.delete('/deleteTodo', (req, res) => {
    let todoId = req.body.todoId;
    Todo.findByIdAndDelete(todoId).then(() => {
        res.json({message: 'Todo deleted'});
    })
})

app.post('/updateTodo', (req, res) => {
    let todoId = req.body.todoId;
 
    Todo.findByIdAndUpdate(todoId, req.body)
    .then(() => {
        res.json({message: 'Todo updated'});
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});