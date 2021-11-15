

const addButton = document.getElementById('add-btn');

addButton.addEventListener('click', ()=>{
	if(input.value ===""){
		alert("please add a todo");
	}else{
		addtodo();
	}
});


function addtodo(){

	const div = document.createElement('div');
	div.classList.add('todo');


	const li = document.createElement('li');
	li.classList.add('todo-item');
	li.innerText = input.value;

	div.appendChild(li);

	const completeButton = document.createElement('button');
	completeButton.classList.add('complete-btn');
	completeButton.innerHTML = '<i class="fa fa-check"></i>';

	completeButton.addEventListener('click', checked);
	function checked(){
		this.parentElement.classList.toggle('completed');
	}



	div.appendChild(completeButton);


	const trashbutton = document.createElement('button');
	trashbutton.classList.add('trash-btn');
	trashbutton.innerHTML = '<i class="fa fa-trash"></i>';

	trashbutton.addEventListener('click', deletebtn);
	function deletebtn(){
		this.parentElement.remove();
	}



	div.appendChild(trashbutton);

	list.appendChild(div);

	input.value = "";

}

input.addEventListener('keypress', ()=>{

if(event.which === 13){
	addtodo();
}
});