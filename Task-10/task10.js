const form = document.getElementById('my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

form.addEventListener('submit',store);
function store(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please enter the field';
        setTimeout(() => msg.remove(), 2000);
    }else{
        localStorage.setItem('name',nameInput.value);
        localStorage.setItem('email',emailInput.value);
        
    } 
}