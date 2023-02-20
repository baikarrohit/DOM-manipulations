
// TRAVERSING THE NODE //

//**** parentNode ****//
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// //*** parentElement ***//
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// console.log(items.parentElement.parentElement.parentElement);
// 
// //*** childNodes ***//
// // console.log(itemList.childNodes);
// //** children ***//
// // console.log(itemList.children);
// // itemList.children[1].style.backgroundColor = '#f4f4f4';
// 
// //** firstChild *//
// console.log(itemList.firstChild);
// 
// //** firstElementChild ***//
// console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent = 'Hello 1';
// 
// //** lastChild *//
// console.log(itemList.lastChild);
//  
// 
// //** lastElementChild ***//
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';
// 
// // nextSibling //
// console.log(itemList.nextSibling);
// //nextElementSibling //
// console.log(itemList.nextElementSibling);
// 
// // previousSibling //
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//*** 1)create element ***//
//create div
var newDiv = document.createElement('div');
 
// add class
newDiv.className = 'Hello';
//add id
newDiv.id = 'Hello1';
//add attr
newDiv.setAttribute('title','Hello Div');

//create text node
var newDivText = document.createTextNode('HELLO World');
// add text to div
newDiv.appendChild(newDivText);
 
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
// console.log(newDiv);
container.insertBefore(newDiv,h1);

//*** 2)Hello world before item 1 ***//

var newLi = document.getElementById('items');
newLi.innerHTML = '<li>HELLO</li>' + newLi.innerHTML;
