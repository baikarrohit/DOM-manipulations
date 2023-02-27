
let users = [];
let i=0;
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailid.value;

    const userData = {
        name,
        email
    }
    users.push(userData);
    localStorage.setItem(email,JSON.stringify(users[i]));
    i++;

    event.target.username.value = '';
    event.target.emailid.value = '';
    showUserOnScreen(userData);

}
function showUserOnScreen(userData){
    const ul = document.getElementById('items');
    const li = document.createElement('li');

    li.textContent = userData.name + '-' + userData.email;
    
    const Delete = document.createElement('input');
    Delete.type = 'button';
    Delete.value = 'Delete';
    
    Delete.onclick = ()=>{
        localStorage.removeItem(userData.email);
        ul.removeChild(li);    
    }
    const Edit = document.createElement('input');
    Edit.type = 'button';
    Edit.value = 'Edit';
    
    Edit.onclick = (event)=>{
        var lst = event.target.parentElement;
        let arr = lst.childNodes[0].textContent.split('-');
        
        ul.removeChild(li);   
        document.getElementById('name').value=arr[0];
        document.getElementById('email').value=arr[1]; 
        localStorage.removeItem(userData.email);
    }

    li.appendChild(Delete);
    li.appendChild(Edit);
    ul.appendChild(li);
    
}



    
    
    
