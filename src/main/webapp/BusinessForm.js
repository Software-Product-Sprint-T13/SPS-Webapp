// submitAllForms = function(){
//     document.getElementById("guidelines").submit();
//     document.getElementById("description").submit();
//     document.getElementById("name").submit();
//     document.getElementById("address").submit();
//     document.getElementById("number").submit();
//     document.getElementById("dates").submit();
//     document.getElementById("opportunities").submit();
// }

function loadTasks() {
  fetch('/show-form').then(response => response.json()).then((tasks) => {
    const taskListElement = document.getElementById('task-list');
    tasks.forEach((task) => {
      taskListElement.appendChild(createTaskElement(task));
    })
  });
}