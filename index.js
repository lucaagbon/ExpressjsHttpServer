// console.log(document.head);
// console.log(document.title);
// console.log(document.domain);
// console.log(document.body);
// console.log(document.all[10]);
// // document.all[10].textContent ="very lovely";
// console.log(document.links);
// console.log(document.forms)
// 
// get elementbyId

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// // headerTitle.textContent ="Great Great";
// // console.log(headerTitle.textContent);
// // headerTitle.innerText="Hollo Title";
// // headerTitle.innerHtml ="<h3>We are living great</h3>"
// // console.log(headerTitle.innerHtml);
// header.style.borderBottom ="solid 3px #ccc";

// GET ELEMENT BY CLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent ="Hello";
// items[1].style.fontWeight ="bold";
// items[1].style.backgroundColor ="yellow";

// // giver error message
// // items.style.backgroundColor="#dddd";
// for(var i= 0; i < items.length; i++) {
//     items[i].style.backgroundColor ="#ddd";
// };

// Queryselector
// var input=document.querySelector('input');
// input.value="Hello world";

// var submit = document.querySelector('input[type="submit"]');
// submit.value="change";

// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color ="blue";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color ="coral";

// // querselectorAll
// var Item = document.querySelectorAll('.title');
// console.log(Item)
// Item[0].textContent ="Hello";
// Item[0].style.textTransform ="uppercase";
// Item[0].style.fontWeight ="bold";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "#f4f4f4";
//     odd[i].style.color ="blue";
//     odd[i].style.fontWeight="bold";
//     even[i].style.backgroundColor = "#ccc";
// };

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "change";

// QUERYSELECTORALL
// var Title = document.querySelectorAll('.title')
// console.log(Title)

// Title[0].textContent="Hello"
// Title[0].style.color="red"

// var li = document.querySelectorAll('li');
// console.log(li)
// for(var i =0; i < li.length; i++){
//     li[i].style.backgroundColor ="#f4f4f4"
// }

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')

// // error message
// // odd.style.backgroundColor = "yellow"

// for(var i =0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "#ccc"
//     even[i].style.backgroundColor = '#f4f4f4'
// }
// parentNode 
// var itemList =  document.querySelector('#items')
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "aquamarine"
// itemList.parentNode.style.borderRadius ="15px"
// console.log(itemList.parentNode.parentNode)

// ParentElement 
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = "aquamarine"
// itemList.parentElement.style.borderRadius ="15px"
// console.log(itemList.parentElement.parentElement)

// childNode
// console.log(itemList.childNode)

// CHILDREN
// console.log(itemList.children)
// itemList.children[2].textContent ="hello"
// itemList.children[2].style.fontWeight = "bold"
// itemList.children[2].style.backgroundColor = "aquamarine";

// FIRST CHILD
// console.log(itemList.firstChild)

// FIRSTELEMENTChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent ="Hello"
// itemList.firstElementChild.style.backgroundColor = "grey"

// LASTELEMENTCHILD
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent ="Hello"
// itemList.lastElementChild.style.backgroundColor = "grey"

// NEXTSIBLING
// console.log(itemList.nextSibling)

// NEXTELEMENTSIBLING
// console.log(itemList.nextElementSibling)
// itemList.nextElementSibling.innerText = "God is merciful and his mercies"
// itemList.nextElementSibling.style.color = "blue"
// itemList.nextElementSibling.style.fontWeight = "bolder";

// previousSibling
// console.log(itemList.previousSibling)

// previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.textContent ="Listern"

// CREATING ELEMENT
// var newDiv = document.createElement('div');

// // add class
// newDiv.className ="title"

// // add id
// newDiv.id ="hello1"

// // add attr
// newDiv.setAttribute('ptext', 'hello Div')

// // create nodetext
// var newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText)
//  var container = document.querySelector("header .container");
//  var h2 = document.querySelector('header h2')

//  container.insertBefore(newDiv, h2)

//  newDiv.style.fontSize ="30px"
//  newDiv.style.fontWeight ="bold"
//  newDiv.style.textTransform ="uppercase"
// console.log(newDiv)

// var row = document.querySelector('.row');
// row.setAttribute('class', 'd-flex')
// console.log(row)

// var button = document.querySelector('#button').addEventListener
//     ('click', buttonClick)

    // function buttonClick(e){
        // console.log('button click')
        // document.getElementById("main").style.backgroundColor ="#f4f4f4";
        // document.querySelector('#header-title').textContent="change";
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.id)
        // console.log(e.target.className)
        // console.log(e.target.classList)
        // var output = document.getElementById('output');
        // output.innerHTML ='<h3>'+e.target.id+'</h3>';
    // }

    // var button = document.querySelector('#button');
    // var box = document.querySelector('#box');

    // button.addEventListener('click', runEvent);
    // button.addEventListener('dblclick', runEvent);
    // button.addEventListener('mousedown', runEvent);
    // button.addEventListener('mouseup', runEvent);
    // button.addEventListener('mouseover', runEvent);

    // // box.addEventListener('mouseenter', runEvent);
    // box.addEventListener('mouseleave', runEvent);
    // box.addEventListener('mousemove', runEvent);

    // function runEvent(e){
    //     console.log('EVENT TYPE: '+e.type)
    //     output.innerHTML='<h3>MouseX: '+e.offSettX+'</h3><h3>MouseY: '+e.offSetY+'</h3>';
    // }









