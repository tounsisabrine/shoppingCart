let userInfo= document.querySelector("#user_info");
let userDom= document.querySelector("#user");
let links= document.querySelector("#links");
let logouBtn = document.querySelector("#logout");

let username = localStorage.getItem("username");

if(username){
    links.remove()
    userInfo.style.display = "flex";
    userDom.innerHTML= username;

    
}
 logouBtn.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(() => {
        window.location ="register.html";
    }, 1500);

 });

 let products =[

    { id: 1,
      title: "Micro-casque"  ,
      size:"Large",
      imageUrl:"images/microcasque.jpg.",
    },
    { id: 2,
        title: "Laptop"  ,
        size:"Large",
        imageUrl:"images/laptop.jpg",
      },
      { id: 3,
        title: "Mouse"  ,
        size:"Small",
        imageUrl:"images/mouse.jpg",
      },
      { id: 4,
        title: "Tablette"  ,
        size:"Meduim",
        imageUrl:"images/tablette.jpg",
      },


    ];
    //define products
    let productsDom= document.querySelector(".products");
    let cartProductDom= document.querySelector(".carts-products div");
    let cart= document.querySelector(".carts-products");

    let badgeDom = document.querySelector(".badge");
    let shoppingCart = document.querySelector(".shopping-cart");
    shoppingCart.addEventListener('click',OpenCartMenu );


    function drawProductUI(){
        let productsUI = products.map((item)=>{
            return `
            <div class="product-item">
            <img src="${item.imageUrl}" alt="images">
            <div class="product-item-desc">
                <h2>${item.title}</h2>
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
    }
    drawProductUI();

    function AddedCart(id){
        let choosenItem = products.find((item) => item.id ===id)
        cartProductDom.innerHTML +=`<p>${choosenItem.title}</p>`;
        let cartProductLength = document.querySelectorAll(".carts-products div p");
        console.log(cartProductLength);
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductLength.length;

    }


    function CheckLogedUser(){
        if(localStorage.getItem("username")){
            console.log("added to Cart");
        } else{
            window.location ="login.html";
        }
    }

    function OpenCartMenu(){
   
        if(cartProductDom.innerHTML !== ""){
            if(cart.style.display =="block"){
            cart.style.display ="none";

            }else{
                cart.style.display ="block";
            }
        } 

    }


