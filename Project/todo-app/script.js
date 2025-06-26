const btn = document.querySelector("button");
const inp = document.querySelector("input");
const task = document.querySelector(".tasklist");
const del = document.querySelectorAll('.delete');
btn.addEventListener("click", () => {
  if (inp.value.length === 0) {
    alert("enter your task");
  } else {
    const content = inp.value;
    task.innerHTML += `
        <div class="item">
          <span> ${content} </span>
          <i class="fa-solid fa-trash-can delete"></i>
        </div>
        `;
    inp.value = "";
  }
});
