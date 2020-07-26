var get = document.getElementById('getText');
var ul = document.getElementById('list');
var btnName = document.getElementById('add');
get.focus();

function add() {
    if (get.value != '') {
        var li = document.createElement('li')
        var text = document.createTextNode(get.value)
        li.setAttribute('class', 'listStyle')
        li.appendChild(text)

        // Delete    
        var del = document.createElement('button')
        var delText = document.createTextNode('Delete')
        del.setAttribute("onclick", "delItem(this)")
        del.appendChild(delText)
        li.appendChild(del)

        // Edit    
        var edit = document.createElement('button')
        var editText = document.createTextNode('Edit')
        edit.appendChild(editText)
        edit.setAttribute("onclick", "editItem(this)")
        li.appendChild(edit)

        get.value = ''
        get.focus()
        ul.appendChild(li)
    } else {
        alert("Type Some Text");
        get.focus();
    }
}

function delItem(e) {
    e.parentNode.remove();
    get.focus();
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editVal = prompt("Update...", val);
    e.parentNode.firstChild.nodeValue = editVal;
    get.focus();
}

function deleteAll() {
    ul.innerHTML = ''
    get.focus();
}