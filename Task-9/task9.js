var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit',addItems);
function addItems(e){
    e.preventDefault();
    //get input value
    var newItem= document.getElementById('item').value;
    var description = document.getElementById('description').value;
    //add li
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+ description));
    
    //create delete btn element
    var deleteBtn = document.createElement('button');
    //add classes to delete btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append btn to list
    li.appendChild(deleteBtn);

    //create edit element
    var edit = document.createElement('edit');
    edit.className = 'btn  btn-sm float-right edit'
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(edit);

    itemList.appendChild(li);
}

// filter event
filter.addEventListener('keyup',filerItems);
//filter items
function filerItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}