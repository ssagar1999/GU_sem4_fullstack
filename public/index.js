let ul = document.getElementById('todos');
let input = document.getElementById('val');
let priority = document.getElementById('pri');

let addTodo = () => {
    let todo = {
        value: input.value,
        priority: priority.value
    }
    axios.post('/addTodo', todo).then(res => {
        console.log(res);
        input.value = '';
        priority.value = '';
        getTodos();
    })
}

let getTodos = () => {
    axios.get('/getTodos').then(res => {
        ul.innerHTML = '';
        res.data.forEach(todo => {
            let li = document.createElement('li');
            let btn = document.createElement('button');
            btn.innerText = 'update';
            btn.addEventListener('click', () => {
                todo.value = prompt('Update Todo');
                axios.post('updateTodo', {
                    todoId: todo._id,
                    value: todo.value,
                    priority: todo.priority
                }).then(res => {
                    console.log(res);
                    // getTodos();
                })
            })
            li.innerHTML = todo.value;
            li.appendChild(btn);
            ul.appendChild(li);
        
            })
           
          
        })

}   

getTodos();

document.querySelector('button').addEventListener('click', addTodo);        

