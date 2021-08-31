let form = document.getElementById("inputTodo");
let editingMode = false;

function newBtn(value, onClick) {
  let btn = document.createElement("input");
  btn.id = "submit";
  btn.type = "submit";
  btn.value = value;
  btn.addEventListener("click", onClick);
  form.appendChild(btn);
}

function removeElement() {
  if (editingMode) return;
  let deleteElement = this.parentElement;
  list.removeChild(deleteElement);
}

function addIcon(li, functionality, iconClassName, onClick) {
  let span = document.createElement("span");
  span.className = functionality;
  let icon = document.createElement("i");
  icon.className = iconClassName;
  span.appendChild(icon);
  li.appendChild(span);
  span.addEventListener("click", onClick);
}

window.onload = (e) => {
  newBtn("Add", newElement);
};

//add checked symbol
let list = document.querySelector("ol");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement(event) {
  event.preventDefault();
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;

  //text span
  let textSpan = document.createElement("span");
  textSpan.className = "text";
  let t = document.createTextNode(inputValue);
  textSpan.appendChild(t);
  li.appendChild(textSpan);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("items-list").appendChild(li);
  }
  document.getElementById("input").value = "";

  //edit icon
  addIcon(li, "edit", "fa fa-edit", edit);
  //delete icon
  addIcon(li, "delete", "fa fa-trash", removeElement);
}

function edit(e) {
  editingMode = true;
  //remove add button
  form.removeChild(document.getElementById("submit"));
  // add edit button
  let li = this.parentElement;
  newBtn("Edit", () => {
    editElement(li);
    input.value = null;
    //remove edit button
    editingMode = false;
    form.removeChild(document.getElementById("submit"));
    newBtn("Add", newElement);
  });

  input.value = li.innerText;
}

function editElement(li) {
  let text = li.firstChild;
  text.textContent = document.getElementById("input").value;
}
