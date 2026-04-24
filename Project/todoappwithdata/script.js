const inp = document.querySelector('input');
const srch = document.getElementById('search');
const ul = document.querySelector('ul');
srch.addEventListener('click',()=>{
    let val = inp.value;
    let list = document.createElement('li');
    list.innerHTML = `${val} <i id="del" class="fa-solid fa-trash"></i>`;
    ul.appendChild(list);
    inp.value = " ";
})

