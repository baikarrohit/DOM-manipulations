const form = document.getElementById('my-form');

form.addEventListener('submit',store);
function store(e){
    e.preventDefault();
    
    const name = e.target.username.value;
    const email = e.target.emailid.value;

    const obj = {
        name:name,
        email:email
    }
    localStorage.setItem('userdetail',JSON.stringify(obj));
} 