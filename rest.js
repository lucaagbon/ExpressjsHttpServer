var form = document.getElementById('addbutton');
var itemList = document.getElementById('items');

form.addEventListener('click', addItem);
// add detele event
itemList.addEventListener('click', removeItem)

function addItem(e){
    // e.preventdefault();
    // console.log(1);

    // add value
    newItem = document.getElementById('hold').value;
    console.log(newItem)
    
    // create element li
    var li = document.createElement('li')
    // add class
    li.className ="list-group-item";

    // add text to li
    li.appendChild(document.createTextNode(newItem));
    
    // create element delete button
    deleteBtn = document.createElement('button');
    // add class
    deleteBtn.className = "btn btn-danger float-right delete";

    // append text node to a button
    deleteBtn.appendChild(document.createTextNode('X'));
    // append deleteBtn to li
    li.appendChild(deleteBtn);

    // append li to itemList
    itemList.appendChild(li);
}

function removeItem(e){
   if(e.target.classList.contains('delete')){
       if(confirm('are you sure?')){
           var li = e.target.parentElement;
           itemList.removeChild(li);
       }
   }
}


const apiUrl = "https:localhost:9000";

// defining async function
async function getapi(url){
    // storing function
    const response = await fetch(url);
    // store in the form of Json
    const data = await response.json(todos);
    console.log(data)
}