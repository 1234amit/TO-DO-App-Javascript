var list = document.getElementById("todo-list")
var btnAdd = document.getElementById('add-item')
var todoInput = document.getElementById('todo-input')
var updateItem = document.getElementById('update-item')
var deleteItem = document.getElementById('delete-item')

var currentInputValue = ""

todoInput.addEventListener('input', function(e){
    currentInputValue = e.target.value
})

function createNewNode(){
    var newListElement = document.createElement('li')    
    var textNode = document.createTextNode(currentInputValue)
    newListElement.appendChild(textNode)
    newListElement.id = "item" + (list.childElementCount + 1)

    return newListElement
}

function addlistitems (){
    if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== ""){
    var newListElement = createNewNode();

    list.appendChild(newListElement)
    console.log(newListElement)

    todoInput.value = ""
    currentInputValue = ""
    }else{
        alert("Please enter the valid TODO Element")
    }
    
}

btnAdd.addEventListener('click', addlistitems);


updateItem.addEventListener('click', function(){
    var firstElement = list.firstElementChild
    var newListElement = createNewNode()

    list.replaceChild(newListElement, firstElement)

    firstElement.value = ""
    newListElement = ""
})

deleteItem.addEventListener('click', function(){
    var firstElement = list.firstElementChild
    list.removeChild(firstElement)
})