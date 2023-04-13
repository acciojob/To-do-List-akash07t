function myfun() {
	
	var newTodo = document.getElementById("newTodoInput").value;
	 var listItem = document.createElement("li");
	if(newTodo == ""){
		alert("type something");
	}
	else{
	listItem.textContent = newTodo;
	var todoList = document.getElementById("todoList");
	  todoList.append(listItem);
}
}

