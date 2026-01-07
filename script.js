let totalinCent = 0;
const stickerButton = document.querySelector("#sticker");
const keychainButton = document.querySelector("#keychain");
const plushButton = document.querySelector("#plush");
const comicButton = document.querySelector("#comic");
const mysteryButton = document.querySelector("#mystery");

const shoppingCart =document.querySelector("#shopping-cart")
 const totalSpan = document.querySelector("#total-span");
const updateTotal = () => {
    totalSpan.textContent = totalInCent / 100;
}

const addsticker = () => {
    shoppingCart.innerHTML += `<p> sticker </p>`;
    totalInCent += 50;
    updateTotal();
}
const addkeychain = () => {
    shoppingCart.innerHTML += `<p> keychain </p>`;
    totalInCent += 150;
    updateTotal();
}
const addplush = () => {
    shoppingCart.innerHTML += `<p> plush </p>`;
    totalInCent += 400;
    updateTotal();
}
const addcomic = () => {
    shoppingCart.innerHTML += `<p> comic </p>`;
    totalInCent += 275;
    updateTotal();
}
const addmystery = () => {
    shoppingCart.innerHTML += `<p> mystery </p>`;
    totalInCent += 325;
    updateTotal();
}

// Event Listeners

stickerButton.addEventListener("click", addsticker);
keychainButton.addEventListener("click", addkeychain);
plushButton.addEventListener("click", addplush);
comicButton.addEventListener("click",addcomic)
mysteryButton.addEventListener("click",addmystery)
sad