let express = require('express'); //require express
let app = express(); // use express
let a = '/';

let studentsData = [
    {name: 'geeta', age: 20, id:1},
    {name: 'geeta 3', age: 28, id:2},
    {name: 'geeta 6', age: 29, id:3},
    {name: 'geeta 78', age: 40, id:4},
]
function b(req, res){
res.send('hello world of geeta');
}
app.get(a,b);

app.get('/geeta', (req, res) => {
    res.send('data on geeta route');
});

app.get('/students/:id', (req, res) => {
    let studentId = req.params.id;
  
    let student = studentsData.find((student) => {
        return student.id == studentId;
    });
    if(student){

        res.json(student);
    }else{
        res.send('no student found');
    }
 
});

//create a new student using get api pass just name 
//and age as a parameter and push to the studentsData array



app.get('/hello', (req, res) => {
    res.send('data on hello route');
});

app.listen(3000, () =>{
    console.log('server started')
})