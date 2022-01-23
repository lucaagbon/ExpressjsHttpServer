const express = require('express');
const bodyParser = require('body-parser')

const port = 6000;
const app = express();
const foods = [{ id: 1, title: "Mr", name: "John Doe", ocupation: "Carpenter" },
            { id: 1, title: "Mr", name: "Angela Joseng", ocupation: "Trader" },
            { id: 1, title: "Mr", name: "Pauletta Samson", ocupation: "Lawyer" },
            { id: 1, title: "Mr", name: "John Peterson", ocupation: "Developer" },
    ]

    // parsing X-web form
    // app.use(bodyParser.urlencoded({ extended: false }))
    // parsing json
    app.use(bodyParser.json())

    app.get('/', ( request, response)=>response.status(200).json(foods));

    app.post('/', (request, response)=>{
        const newFoods = {}
        const {title}  = request.body;
        console.log(title, 'new title added')
        newFoods.id = foods.length + 1
        newFoods.title = title
        foods.push(newFoods);
        return response.status(200).json(newFoods)
    });

    app.put('/:id', (request, response)=>{
        const id = request.params.id
        console.log(id)
        const foodUpdated = request.body;
        console.log(foodUpdated, 'food has been updated')
        for(let i = 0; i < foods.length; i++){
       if(foods[i].id === Number(id)){
           foods[i].title = foodUpdated.title
           return response.status(200).json(foods[i])
            }
        }
    
    });



app.listen(port, console.log(`server is running on port ${port} `));


