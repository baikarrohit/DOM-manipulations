

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
    ul.appendChild(li);
}


    
    
    
