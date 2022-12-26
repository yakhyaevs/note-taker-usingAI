// const addButton = document.getElementById("add-button");
// const notesList = document.getElementById("notes-list");
// const noteTextarea = document.getElementById("note");

// addButton.addEventListener("click", () => {
//   const note = noteTextarea.value;
//   const newListItem = document.createElement("li");
//   newListItem.innerHTML = note;
//   notesList.appendChild(newListItem);
// });
const addButton = document.getElementById("add-button");
const notesList = document.getElementById("notes-list");
const noteTextarea = document.getElementById("note");

addButton.addEventListener("click", () => {
  const note = noteTextarea.value;
  const newListItem = document.createElement("li");
  newListItem.innerHTML = `${note} <button class="update-button">Update</button> <button class="delete-button">Delete</button>`;
  notesList.appendChild(newListItem);
});

notesList.addEventListener("click", (event) => {
  if (event.target.className === "delete-button") {
    const listItem = event.target.parentNode;
    listItem.remove();
  } else if (event.target.className === "update-button") {
    const listItem = event.target.parentNode;
    const textarea = document.createElement("textarea");
    textarea.value = listItem.firstChild.textContent;
    listItem.replaceChild(textarea, listItem.firstChild);
    event.target.textContent = "Save";
    event.target.className = "save-button";
  } else if (event.target.className === "save-button") {
    const listItem = event.target.parentNode;
    const note = listItem.firstChild.value;
    const p = document.createElement("p");
    p.textContent = note;
    listItem.replaceChild(p, listItem.firstChild);
    event.target.textContent = "Update";
    event.target.className = "update-button";
  }
});
