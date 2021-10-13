// const inputName = document.getElementById("name")
// const email = document.getElementById("email")
// const password = document.getElementById("password")
// const confirmPassword = document.getElementById("password2")
const btn = document.getElementById("btn")




function formSubmit(e) {
    e.preventDefault()
    const inputName = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("password2").value
    var small = document.getElementById("error")
    console.log(small);
    if(inputName.length<5) {
        alert("enter")
    } else if(!email) {
        
       alert("enter email")

    }else if (!password){
        alert("enter password")

    }
    else if(password != confirmPassword){
        alert("password not matching")

    } else {
        alert("form submitted")
    }
    console.log(inputName);
    console.log("clicked");
   
}

btn.addEventListener("click", formSubmit)