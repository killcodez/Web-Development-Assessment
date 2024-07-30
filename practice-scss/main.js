//console.log('this works') // talking to the console

//console.log(window) // shows all window options inside the console

//window.alert('hello world');  //this is a popup alert



document.querySelector('#input')

function printFormInput() {
    var input = document.getElementById('input');
    var ul = document.querySelector('#list');
    var li = document.createElement('li');
    li.innerHTML = input.value
    ul.appendChild(li);
    input.value = ''; // clears the text box
   
}