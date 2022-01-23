// console.log(document.title);
// console.log(document.head);
// console.log(document.body)
// console.log(document.all);
// document.all[12].textContent = "Form Item";

// Get Element by Id
// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')

// headerTitle.textContent="Header Lister";
// console.log(headerTitle)
// headerTitle.innerText ="Hello";
// headerTitle.innerHtml = "<h3>The main purpose </h3>";
// console.log(headerTitle.innerHtml)
// headerTitle.style.borderBottom ="solid 3px #ccc";
// header.style.borderBottom ="solid 7px #ccc";

// // GET ELEMENT BY CLASSNAME
// var Item = document.getElementsByClassName('list-group-item')
// Item[1].textContent = "Hello"
// Item[1].style.backgroundColor ="#f4f4f4"
// Item[1].style.fontWeight ="bold"

// error message here
// Item.style.backgroundColor="yellow";
// for(var i = 0; i < Item.length; i++){
//     Item[i].style.backgroundColor = "#f4f4f4"
// }


// GET Element by TagName
// var input = document.getElementsByTagName('input')
// console.log(input)
// input[0].value ="hello";
// input[1].value ="change"

// queryselector

// var input = document.querySelector('input')
// input.value ="change";

// var submit = document.querySelector('input[type="submit"]')
// submit.value = "Hold"
// submit.style.color = "red"

// querySelectorAll
// var Item = document.querySelectorAll('.title')
// console.log(Item)
// Item[0].style.color ="blue";
// Item[0].fontWeight = "bolder";

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')
// console.log(odd)
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor ="#f4f4f4"
//     even[i].style.backgroundColor ="#ccc";
// }

// parentNode
// itemList = document.querySelector('#item')
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "aquamarine";
// console.log(itemList.parentNode.parentNode.parentNode)

// parentElement
// itemList = document.querySelector('#item')
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = "aquamarine";
// console.log(itemList.parentElement.parentElement.parentElement)

//CHILDNODE
// console.log(itemList.childNodes)

// children
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor ="yellow";
// itemList.children[1].textContent = "Helloguys";
// itemList.children[1].style.fontWeight = "bolder";

// firstChild
// console.log(itemList.firstChild)

// // first ElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent ="Hello"

// LastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent ="Hello"
// itemList.lastElementChild.style.color ="red"

// nextsibling
// console.log(itemList.nextSibling)

// NEXTELEMENTSIBLING
// console.log(itemList.nextElementSibling)
// itemList.nextElementSibling.style.textTransform ="uppercase";

// previousSibling
// console.log(itemList.previousSibling)

// previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.textContent = "Feelings"
// itemList.previousElementSibling.style.color ="#abdbab"

// CREATE ELEMENT
var newDiv = document.createElement('div')
// add class
newDiv.className ="hello"
// add id
newDiv.id ="title"
// add attr
newDiv.setAttribute("class", "text-light");
// create textNode
var newDivText = document.createTextNode('I am a developer')

// append to div
newDiv.appendChild(newDivText)
var container = document.querySelector("header .container");
var h1 = document.querySelector('header h1');
console.log(newDiv)

container.insertBefore(newDiv, h1);





