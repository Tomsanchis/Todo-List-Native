const buttonadd = document.querySelector(".btn");
const input = document.getElementById("name");

const addatodo = () => {
  let todos = [];
  buttonadd.addEventListener("click", () => {
    if (input.value != "") {
      todos.push({ content: input.value });
      console.log(todos);
      input.value = "";
      document.querySelectorAll(".todo").forEach((elem) => {
        elem.remove();
      });
      todos.map((content) => {
        const div = document.createElement("div");
        div.classList.add("todo");
        const p = document.createElement("p");
        p.textContent = content.content;
        const deletebutton = document.createElement("button");
        deletebutton.classList.add("btn-delete");
        deletebutton.textContent = "delete";
        document.body.appendChild(div);
        div.appendChild(p);
        div.appendChild(deletebutton);
      });
      deletetodo(todos);
    }
  });
};

addatodo();

const deletetodo = (todos) => {
  const selectdeletedbutton = document.querySelectorAll(".btn-delete");
  const selectdivtodo = document.querySelectorAll(".todo");
  for (let i = 0; i < selectdeletedbutton.length; i++) {
    selectdeletedbutton[i].addEventListener("click", () => {
      selectdivtodo[i].parentNode.removeChild(selectdivtodo[i]);
      todos.splice(todos, 1);
      console.log(todos);
    });
  }
};
