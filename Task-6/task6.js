//**** Queryselector****//

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px red';
// 
// var input = document.querySelector('input');
// input.value = 'TyprHere';
// 
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";
// 
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';
// 
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// ***** querySelectorAll *****//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "hello";
// 
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// var li = document.querySelectorAll('li');
// li[1].style.backgroundColor = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
     
 }