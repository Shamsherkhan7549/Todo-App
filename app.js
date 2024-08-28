
let button = document.querySelector("button");
let input = document.querySelector('.search-bar input');
let ul = document.querySelector('ul');
let error = document.querySelector('.error');


button.addEventListener('click', () => {

    if(input.value == ""){
        error.style.display = "block";
    }else{

   let li =  document.createElement('li');

   let spanText = document.createElement('span');
   spanText.innerText = input.value;
   spanText.classList.add('text');

   li.append(spanText);
   ul.append(li);

   let radioInput =  document.createElement('input');
   radioInput.type = 'radio';
   li.insertAdjacentElement("afterbegin", radioInput);

   let spanDelete = document.createElement('span');
   spanDelete.innerText = 'x';
   spanDelete.classList.add('delete');

   li.insertAdjacentElement("beforeend", spanDelete)
   
   input.value = "";
   error.style.display = "none";
   saveData();

    }
   
});


let lis = document.querySelectorAll('ul');

for(li of lis){
    li.addEventListener('click' , function(event) {
        
       if(event.target.innerText == 'x'){
        event.target.parentElement.remove();
        saveData();
        
       }else if(event.target.tagName == 'INPUT'){
        event.target.parentElement.childNodes[1].style.textDecoration = "line-through";
        event.target.parentElement.childNodes[0].checked = true;
       
       
       }else{
        event.target.parentElement.childNodes[1].style.textDecoration = "none";
        event.target.parentElement.childNodes[0].checked = false;
    
       }
      

      })
}

function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}

function showTasks(){
    ul.innerHTML = localStorage.getItem("data");
}

showTasks();
