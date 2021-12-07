let username= document.querySelector("#username");
let password= document.querySelector("#password");
let login_btn = document.querySelector("#sign_in");

let getuser = localStorage.getItem("username");
let getpassword = localStorage.getItem("password");

login_btn.addEventListener('click', function(e){
    e.preventDefault();
    if(username.value === "" || password.value === ""){
        alert("Please fill data");
    }else{
        if(
            getuser && 
            getuser.trim() === username.value.trim() &&
            getpassword && getpassword === password.value
        ){
            setTimeout(() =>{
                window.location = "index.html";
            },1500);

        } else {
            console.log("username or password is wrong !!");
        }
    }





})

