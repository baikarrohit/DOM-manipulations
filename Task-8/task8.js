var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click',removeItem);
//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    //create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // add text node with input value 
    li.appendChild(document.createTextNode(newItem));
    
    //create edit element
    var edit = document.createElement('edit');
    edit.className = 'btn btn-danger btn-sm float-right edit'
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(edit);

    //create delete btn element
    var deleteBtn = document.createElement('button');
    //add classes to delete btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append btn to list
    li.appendChild(deleteBtn);
    
    //append li to list
    itemList.appendChild(li); 
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}