const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonNewPrice = document.querySelector(".new-price");
const buttonSumAll = document.querySelector(".sum-all");
const buttonFilter = document.querySelector(".filter");

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    return newValue
}
function showAll(productArray) {
    let myLi = ""
    productArray.forEach((option) => {
        myLi += `
        <li>
            <img src=${option.src} alt="${option.name}">
                <p>${option.name}</p>
                <p class="item-price"> ${formatCurrency(option.price)}</p>
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
    const sum = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
        <li>
            <p> A soma de todos os lanches é de  ${formatCurrency(sum)}</p>
        </li>
    `
}

function filterProducts() {
    const filteredProducts = menuOptions.filter((product) => product.vegan)

    showAll(filteredProducts)
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonNewPrice.addEventListener("click", porcentage10)
buttonSumAll.addEventListener("click", sumAllPrices)
buttonFilter.addEventListener("click", filterProducts)
