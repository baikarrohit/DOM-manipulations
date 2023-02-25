
var itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);

function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailid.value;

    const obj = {
        name,
        email
    }
    localStorage.setItem('userdetails',JSON.stringify(obj));
    
    showUserOnScreen(obj);

}
function showUserOnScreen(obj){
    const ul = document.getElementById('items');
    const li = document.createElement('li');

    li.textContent = obj.name + '-' + obj.email;
    
    const Delete = document.createElement('delete');
    Delete.className = 'btn btn-danger btn-sm float-right delete';
    Delete.appendChild(document.createTextNode('Delete'));
    li.appendChild(Delete);
    ul.appendChild(li);
    
}
function removeItem(event){
    if(event.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = event.target.parentElement;
          itemList.removeChild(li);
          localStorage.removeItem('userdetails');
        }
      }
}


    
    
    
