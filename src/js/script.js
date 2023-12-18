const addInput = document.querySelector("#add");
const buttonAdd = document.querySelector(".sub");
const listArea = document.querySelector(".lists");
const label = document.querySelector(".lbl");

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();

  if (addInput.value === "") {
    addInput.style.border = "1px solid red";
    addInput.placeholder = "Digite algo";
    colorInputErrorRefresh();
  } else {
    const list = document.createElement("div");
    list.classList.add("list");

    const h1 = document.createElement("h1");
    h1.classList.add("title-atv");
    h1.innerText = addInput.value;
    addInput.value = "";

    list.appendChild(h1);

    const divBtns = document.createElement("div");
    divBtns.classList.add("btns");

    const buttonCheck = document.createElement("button");
    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");

    buttonCheck.classList.add("check");
    buttonEdit.classList.add("edit");
    buttonDelete.classList.add("delete");

    buttonCheck.innerHTML = '<i class="bi bi-check-lg"></i>';
    buttonEdit.innerHTML = '<i class="bi bi-pencil-fill"></i>';
    buttonDelete.innerHTML = ' <i class="bi bi-archive-fill"></i>';

    divBtns.appendChild(buttonCheck);
    divBtns.appendChild(buttonEdit);
    divBtns.appendChild(buttonDelete);

    list.appendChild(divBtns);

    listArea.appendChild(list);

    buttonCheck.addEventListener("click", () => {
      list.classList.toggle("active");
      buttonCheck.classList.toggle("btn-active");
    });

    buttonDelete.addEventListener("click", () => {
      list.remove();
    });

    buttonEdit.addEventListener("click", () => {
      label.textContent = "Mudar Tarefa";
      addInput.placeholder = "Novo nome da Tarefa";
      buttonAdd.innerHTML = '<i class="bi bi-arrow-clockwise"></i>';
      buttonEdit.style.backgroundColor = "#0551ba";
      buttonEdit.style.color = "#FFF";
      const valueInput = h1.innerText;
      addInput.value = valueInput;

      buttonAdd.addEventListener("click", () => {
        label.textContent = "Adicione Sua Tarefa";
        addInput.placeholder = "Digite o nome da sua tarefa";
        buttonAdd.innerHTML = '<i class="bi bi-plus-lg"></i>';

        buttonEdit.style.backgroundColor = "";
        buttonEdit.style.color = "";

        h1.innerText = addInput.value;
        list.remove();
      });
    });
  }
});

const colorInputErrorRefresh = () => {
  addInput.addEventListener("focus", () => {
    addInput.style.border = "none";
    addInput.placeholder = "Digite o nome da sua tarefa";
  });
};
