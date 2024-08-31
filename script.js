const lightMode = document.querySelector("#mode");
const sunImg = document.querySelector("#sun");
const moonImg = document.querySelector("#moon");
const headText = document.querySelector("h1");
const container = document.querySelector(".container");
const newTodo = document.querySelector(".addNewTodo");
const searchTodo = document.querySelector("#search");

lightMode.addEventListener("click", () => {
  if (lightMode.src.includes("on.png")) {
    sunImg.style.visibility = "hidden";
    moonImg.style.visibility = "visible";
    headText.style.color = "white";
    document.body.style.backgroundColor = "black";
    lightMode.src = "./assets/off.png";
    container.style.borderColor = "white";
    container.style.color = "white";

    document.querySelectorAll(".todoDiv").forEach((div) => {
      div.style.borderColor = "white";
      div.querySelector(".text").style.color = "black";
    });
  } else {
    sunImg.style.visibility = "visible";
    moonImg.style.visibility = "hidden";
    headText.style.color = "black";
    document.body.style.backgroundColor = "white";
    lightMode.src = "./assets/on.png";
    container.style.borderColor = "black";
    container.style.color = "black";

    document.querySelectorAll(".todoDiv").forEach((div) => {
      div.style.borderColor = "black";
      div.querySelector(".text").style.color = "black";
    });
  }
});

newTodo.addEventListener("click", () => {
  let newPrompt = prompt("Add to new to do");
  if (newPrompt === null || newPrompt.trim() === "") {
    alert("You have to add to do");
    return;
  }

  const newDiv = document.createElement("div");
  newDiv.classList.add("todoDiv");
  newDiv.style.border = lightMode.src.includes("on.png")
    ? "2px solid black"
    : "2px solid white";
  newDiv.style.padding = "10px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "space-between";
  newDiv.style.backgroundColor = lightMode.src.includes("on.png")
    ? "white"
    : "black";

  const newText = document.createElement("div");
  newText.classList.add("text");
  newText.innerHTML = newPrompt;
  newText.style.fontSize = "30px";
  newText.style.color = lightMode.src.includes("on.png") ? "black" : "white";
  newDiv.appendChild(newText);

  const newButtonsDiv = document.createElement("div");
  newButtonsDiv.classList.add("buttons");
  newButtonsDiv.style.display = "flex";
  newButtonsDiv.style.gap = "10px";
  newDiv.appendChild(newButtonsDiv);

  const newEditButton = document.createElement("button");
  newEditButton.classList.add("edit");
  newEditButton.innerText = "🖋";
  newEditButton.style.padding = "10px";
  newEditButton.style.border = "none";
  newEditButton.style.color = "white";
  newEditButton.style.backgroundColor = "orange";
  newButtonsDiv.appendChild(newEditButton);

  const newChangeButton = document.createElement("button");
  newChangeButton.classList.add("change");
  newChangeButton.innerText = "✔";
  newChangeButton.style.padding = "10px";
  newChangeButton.style.border = "none";
  newChangeButton.style.color = "white";
  newChangeButton.style.backgroundColor = "blue";
  newButtonsDiv.appendChild(newChangeButton);

  const newDeleteButton = document.createElement("button");
  newDeleteButton.classList.add("delete");
  newDeleteButton.innerText = "❌";
  newDeleteButton.style.padding = "10px";
  newDeleteButton.style.border = "none";
  newDeleteButton.style.color = "white";
  newDeleteButton.style.backgroundColor = "red";
  newButtonsDiv.appendChild(newDeleteButton);

  newEditButton.addEventListener("click", () => {
    const editPrompt = prompt("Edit your to do", newText.innerHTML);
    if (editPrompt !== null) {
      newText.innerHTML = editPrompt;
    }
  });

  newChangeButton.addEventListener("click", () => {
    newDiv.style.backgroundColor = "green";
    newText.style.color = "white";
  });

  newDeleteButton.addEventListener("click", () => {
    newDiv.remove();
  });

  container.appendChild(newDiv);
});

searchTodo.addEventListener("input", () => {
  const searchValue = searchTodo.value.toLowerCase();
  const todos = document.querySelectorAll(".todoDiv");
  todos.forEach((todo) => {
    const todoText = todo.querySelector(".text").textContent.toLowerCase();
    todo.style.display = todoText.includes(searchValue) ? "flex" : "none";
  });
});