const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
let myLi = ""

function showAll() {
    menuOptions.forEach((option) => {
        myLi += `
        <li>
            <img src=${option.src} alt="${option.name}">
                <p>${option.name}</p>
                <p class="item-price">R$ ${option.price},00</p>
        </li>
    `
    })
    list.innerHTML = myLi
}




buttonShowAll.addEventListener("click", showAll)