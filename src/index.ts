const btn = document.getElementById("btn");
const input = document.getElementById("todo-input")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist");

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodoText = input.value;
  const newLI = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(newTodoText);
  newLI.append(checkbox);
  list?.append(newLI);
}

form.addEventListener("submit", handleSubmit);
