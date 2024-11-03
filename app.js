let $ = document
const inputBox =$.querySelector('#input-box')
const addBtn =$.querySelector('#addBtn')
const listContainer =$.querySelector('#list-coutainer')

function addNewTodo(){
if(inputBox.value === ' '){
alert('You most right something!')
}else{
       let newTodoLi = $.createElement('li')
    newTodoLi.innerHTML = inputBox.value
    listContainer.append(newTodoLi)
    let newTodoSpan = $.createElement('span')
    newTodoSpan.innerHTML = '\u00d7'
    newTodoLi.append(newTodoSpan)
    console.log(listContainer);
    
}
inputBox.focus()
inputBox.value = ''
setLocalStorageTodo()
getLocalStorage()
}

 

addBtn.addEventListener('click' ,addNewTodo )
listContainer.addEventListener('click' ,function(event){
if(event.target.tagName === 'LI'){
event.target.classList.toggle('checked')
} else if(event.target.tagName === 'SPAN'){
event.target.parentElement.remove()
}
}  )

function setLocalStorageTodo(){
    let setLocalStorageTodo = localStorage.setItem('todos' , listContainer.innerHTML)
}
function getLocalStorage(){
    listContainer.innerHTML = localStorage.getItem('todos')
}