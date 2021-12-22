
    //define products
    let productsDom= document.querySelector(".products");
    let cartProductDom= document.querySelector(".carts-products div");
    let cart= document.querySelector(".carts-products");

    let badgeDom = document.querySelector(".badge");
    let shoppingCart = document.querySelector(".shopping-cart");
    shoppingCart.addEventListener('click',OpenCartMenu );
    let products= JSON.parse(localStorage.getItem("products"));

    let drawProductUI;
    (drawProductUI=function (products = []){
        let productsUI = products.map((item)=>{
            return `
            <div class="product-item">
            <img src="${item.imageUrl}" alt="images">
            <div class="product-item-desc">
                <a href="cartDetails.html" onclick="SelectId(${item.id})">${item.title}</a>
                <p>lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                <span>Size: ${item.size}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="AddedCart(${item.id})">Add to cart</button>
                <i class="favorite fa fa-heart-o"></i>
            </div>
        </div>
            
            `
        })

        productsDom.innerHTML=productsUI;
    })(JSON.parse(localStorage.getItem("products")));
  //check if there are item in localstorage
    let addedItem =localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];

    if(addedItem){
        addedItem.map((item) =>{
            cartProductDom.innerHTML +=`<p>${item.title}</p>`;
        });
        badgeDom.style.display= "block";
        badgeDom.innerHTML = addedItem.length;

    }




    //Add items to Cart
    function AddedCart(id){
        if(localStorage.getItem("username")){
        let choosenItem = products.find((item) => item.id ===id)
        cartProductDom.innerHTML +=`<p>${choosenItem.title}</p>`;

        addedItem = [...addedItem, choosenItem];
        localStorage.setItem('productsInCart', JSON.stringify(addedItem))

        let cartProductLength = document.querySelectorAll(".carts-products div p");
        console.log(cartProductLength);
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductLength.length;
        }else{
            window.location ="login.html";
        }

    }



// open cart Menu
    function OpenCartMenu(){
   
        if(cartProductDom.innerHTML !== ""){
            if(cart.style.display =="block"){
            cart.style.display ="none";

            }else{
                cart.style.display ="block";
            }
        } 

    }

    function SelectId(id){
        localStorage.setItem("productId", id);
        console.log(localStorage.setItem("productId", id));
        window.location = "cartDetails.html";

    }

    input = document.getElementById("search");
    input.addEventListener("keyup", function(e){
        if(e.keyCode ===13){
            Search(e.target.value, products);
        }
        if(e.target.value.trim()===""){
            drawProductUI(JSON.parse(localStorage.getItem("products")));

        }
    })

    function Search(title,myArray){
    /*    for (var i=0; i<myArray.length; i++){
            if(myArray[i] === title){
                console.log(myArray[i]);
            }
        } */
        let arr = myArray.filter((item)=> item.title === title);
        drawProductUI(arr);

    }


