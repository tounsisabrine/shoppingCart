let Noproduct = document.querySelector(".no-items");
let productsDom = document.querySelector(".products");

/*if(productsInCart){
    let items = JSON.parse(productsInCart);
    drawCartProductsUI(items);
}*/

function drawCartProductsUI(allProducts = []){
    if(JSON.parse(localStorage.getItem("productsInCart"))==""){
        Noproduct.innerHTML = "<p> there is no item left!</p>" 
     }
    
let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
let productsUI = products.map( item =>{
    return `
    <div class="product-item">
    <img src="${item.imageUrl}" alt="images">
    <div class="product-item-desc">
        <h2>${item.title}</h2>
        <p>lorem ipsum dolor sit amet consectetur adipiscing elit</p>
        <span>Size: ${item.size}</span>
    </div>
    <div class="product-item-actions">
        <button class="add-to-cart" onclick="RemoveItem(${item.id})">remove from cart</button>
        <i class="favorite fa fa-heart-o"></i>
    </div>
</div>
    
    `



})


productsDom.innerHTML=productsUI;

}
drawCartProductsUI();

function RemoveItem(id){
let productsInCart=localStorage.getItem("productsInCart");
if (productsInCart){
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item)=> item.id == id );
    drawCartProductsUI(filteredItems);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
}

}
