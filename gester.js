const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const port = 9000;
const app = express();
app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


var todos = [{id:1, title:'item 12234'}, {id:2, title:'item 212'}, 
{id:3, title:'item 32'}, {id:3, title:'item 43'}];


app.use(bodyParser.json())

app.get('/', (request, response) => response.status(200).json(todos));

app.post('/', (request, response) => {
    const newTodo = {};
    const { title } = request.body;
    newTodo.id = todos.length +1;
    newTodo.title = title;
    todos.push(newTodo);
    response.status(201).json({
      msg: 'item successfuly added', newTodo});
  });

  app.put('/:id', (request, response)=>{
    var id = request.params.id;
    console.log(id)
    var updatedTodo = request.body;
    console.log(updatedTodo, 'updatedTodo')
    for(let i = 0; i < todos.length; i++){
      if(todos[i].id === Number(id)){
        todos[i].title = updatedTodo.title
        return response.status(200).json(todos[i])
      }
    }
  });

  app.delete('/:place', (request, response)=> {
    const id = request.params.place
    const deletedTodo = request.body;
    console.log(deletedTodo, 'deletedTodo')
    for(let i = 0; i < todos.length; i ++){
      if(todos[i].id === Number(id)){
        todos.splice(i, 1)
        return response.status(200).json({
          msg: 'item successfuly removed', todos})
      }
    }

  })


  

app.listen(port, () => {
  console.log(`server is running on Port ${port} `)
})
