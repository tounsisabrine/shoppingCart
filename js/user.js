let userInfo= document.querySelector("#user_info");
let userDom= document.querySelector("#user");
let links= document.querySelector("#links");
let logouBtn = document.querySelector("#logout");

let username = localStorage.getItem("username");

if(username){
    console.log(username);
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML= username;

    
}
 logouBtn.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(() => {
        window.location ="register.html";
    }, 1500);

 });