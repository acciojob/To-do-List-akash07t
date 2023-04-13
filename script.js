
let addTodoBtn = document.getElementById("addTodoBtn");

 addTodoBtn.addEventListener("click",()=>{
	let newTodoInput = document.getElementById("newTodoInput").value;
	 var listItem = document.createElement("li");
	listItem.textContent = newTodoInput;
	todoList.append(listItem);
	if(newTodoInput !== ""){
		document.getElementById("list").innerHTML = newTodoInput;
	}
})
	


