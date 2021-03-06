function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText) { return };

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    const todoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);


    });
}

//Why do we now need the word "event" after submit?
//Didn't need this on the last assignment
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
});

renderTheUI(toDos);


 }

window.onload = function() {
  onReady();
};
