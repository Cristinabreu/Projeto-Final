const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonNewPrice = document.querySelector(".new-price");
const buttonSumAll = document.querySelector(".sum-all");
const filter = document.querySelector(".filter");


function showAll(productArray) {
    let myLi = ""
    productArray.forEach((option) => {
        myLi += `
        <li>
            <img src=${option.src} alt="${option.name}">
                <p>${option.name}</p>
                <p class="item-price">R$ ${option.price.toFixed(2)}</p>
        </li>
    `
    })
    list.innerHTML = myLi
}

function porcentage10() {
    const currentprice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))
    showAll(currentprice)
}

function sumAllPrices() {
    myLi = ""
    const sum = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    myLi += `
        <li>
            <p> A soma de todos os lanches é de R$ ${sum.toFixed(2)}</p>
        </li>
    `
    list.innerHTML = myLi
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonNewPrice.addEventListener("click", porcentage10)
buttonSumAll.addEventListener("click", sumAllPrices)
