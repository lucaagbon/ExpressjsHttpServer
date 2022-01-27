// const { get } = require("express/lib/response")

// const e = require("express")

// const { links } = require("express/lib/response");

const ulLi = document.getElementById('items')
var addButton = document.getElementById('addbutton')
const inputData = document.getElementById('hold')
// document.createElement('button').addEventListener('click', ()=>{
//     removeTodo(id)
// })

    addButton.addEventListener('click', () => {
        createTodo ()
    }); 
//    ulLi.addEventListener('click', removeBtn);
//     function removeBtn(e){
//         removeTodo()
//         if(e.target.classList.contains('delete')){
//             if(confirm('Are you sure')){
//                 ulLi.removeChild('li')
//             }
//         }
//     }



    
    

    const getTodos = ()=> {
        const url = "http://localhost:9000";
    
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            // body: JSON.stringify(todos),
        }

        fetch(url, options)
        .then(res => res.json())
        .then((data) => {

            console.log(data, 'data')
            if(data){
                
                for (let index = 0; index < data.length; index++) {
                    let newLi = document.createElement('li')
                    // add list class
                    newLi.className="list-group-item"
                    // create textnode
                    let newLiText = document.createTextNode(data[index].title);
                    // append text
                    newLi.appendChild(newLiText)
                    let button = document.createElement('button')
                    button.setAttribute('type', "button")
                    button.className="btn btn-danger btn-sm float-right delete";
                    button.addEventListener('click', () => {
                        console.log('delete');
                        console.log(index)
                        removeTodo(index + 1)
                    })
                    // append a textNode to button
                    buttonText = document.createTextNode("X");
                    // // append text to button
                    button.appendChild(buttonText)
                    //     // append button to li
                    newLi.appendChild(button)
                    const getList = ulLi.appendChild(newLi)   
                }
            }
        })
    };

    getTodos();
    

    const createTodo = ()=> {
        const url = "http://localhost:9000";
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({title: inputData.value}),
        }

        fetch(url, options)
        .then(res => res.json())
        .then((data) => {
            console.log(data, "new data")
            // getTodos()
            // window.location.reload()
            if(data){
                const postLi = document.createElement('Li')
                postLi.className="list-group-item"
                const newbutton= document.createElement('button')
                newbutton.setAttribute('type', "button")
                newbutton.className="btn btn-danger btn-sm float-right delete";
                newbutton.addEventListener('click', () => {
                        console.log(data.newTodo.id)
                        removeTodo(data.newTodo.id)
                })
                const textLi = document.createTextNode(data.newTodo.title)
                const DeleteBtnText = document.createTextNode('X')
                newbutton.appendChild(DeleteBtnText)
                postLi.appendChild(textLi)
                postLi.appendChild(newbutton)
                ulLi.appendChild(postLi)
                alert(data.msg)

            }
        })
    }

    const removeTodo = (id)=> {
        const url = "http://localhost:9000/"+id;
    
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        
        }
            fetch(url, options)
            .then(res => res.json())
            .then((data)  => {
                alert(data.msg)
            })
            window.location.reload()
        }
