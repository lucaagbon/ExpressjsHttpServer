// const { get } = require("express/lib/response")

const ulLi = document.getElementById('items')
var addButton = document.getElementById('addbutton')
var itemList = document.getElementById('items')
const inputData = document.getElementById('hold')
addButton.addEventListener('click', () => {
    
    createTodo()
});
// 
// function addItem(e){

// }
// // add detele event
// itemList.addEventListener('click', removeItem)


//     const ulLi = document.getElementById('items')
//     const liArray = [ "", "", "", ""]
    
//     for (let index = 0; index < liArray.length; index++) {
// let newLi = document.createElement('li')
// let button = document.createElement('button')
//     // add list class
//     newLi.className="list-group-item"
//     // create textnode
//     let newLiText = document.createTextNode('item');
//     // append text
//     newLi.appendChild(newLiText)

//     button.setAttribute('type', "button")
//     button.className="btn btn-danger btn-sm float-right delete";
//     // append a textNode to button
//     buttonText = document.createTextNode("X");
//     // // append text to button
//     button.appendChild(buttonText)
//     //     // append button to li
//        newLi.appendChild(button)
//        const getList = ulLi.appendChild(newLi)   
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
                    console.log(data.title, 'data3')
                    let newLi = document.createElement('li')
                    let button = document.createElement('button')
                    // add list class
                    newLi.className="list-group-item"
                    // create textnode
                    let newLiText = document.createTextNode(data[index].title);
                    // append text
                    newLi.appendChild(newLiText)
                
                    button.setAttribute('type', "button")
                    button.className="btn btn-danger btn-sm float-right delete";
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
        // .catch(error => console.log(error));
        // console.log(data)
    };
    getTodos();
    // form.addEventListener('click', addItems)

    //          function addItems(event){
    //             let LiText = document.createTextNode(todos.title)
    //             let newList =document.createElement(li)
    //             newList.appendChild(LiText)
    //             newList
    //        
    // form.addEventListener('click', addItems)

    //          function addItems(e){
                
    //          }

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
            const postLi = document.createElement('Li')
            postLi.className="list-group-item"
            const newbutton= document.createElement('button')
            newbutton.setAttribute('type', "button")
            newbutton.className="btn btn-danger btn-sm float-right delete";
            const textLi = document.createTextNode('item 1')
            postLi 
            const DeleteBtnText = document.createTextNode('X')
            newbutton.appendChild(DeleteBtnText)
            postLi.appendChild(textLi)
            postLi.appendChild(newbutton)
            ulLi.appendChild(postLi)
        })
    }
         
