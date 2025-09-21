document.querySelector("#load").addEventListener("click", loadCompletedTodos);

function loadCompletedTodos(){
  let url = "https://jsonplaceholder.typicode.com/todos";
  
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      let completedTodos = data.filter(function(item){
        return item.completed === true;
      });
      
      let ul = document.querySelector("#list");
      ul.innerHTML = ""; 
      
      if (completedTodos.length === 0) {
        ul.innerHTML = "<li>Нет выполненных задач</li>";
        return;
      }
      
      let html = completedTodos.map(function(task){
        return `<li class="user-task">
                  Пользователь: ${task.userId} выполнил задачу № ${task.id} 
                  <span class="task-title">(${task.title})</span>
                </li>`;
      });
      
      ul.insertAdjacentHTML("beforeend", html.join("")); 
    })
    .catch(function(error){
      console.error("Ошибка при загрузке данных:", error);
      document.querySelector("#list").innerHTML = "<li>Ошибка при загрузке данных</li>";
    });
}