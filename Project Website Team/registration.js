let fullname = document.getElementById("fullname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");
let checkbox = document.getElementById("checkbox");
let errorusername = document.getElementById("errorusername");



function isLetter(str){
    var nameCheck =/^[A-Za-z]+$/;
    if(str.value.match(nameCheck)){
        return 1;
    }
    else{
        return 0;
    }
}



function validation(){
    if(fullname.value.length <= 0){
        errorfullname.innerHTML = "Name cannot be empty!";
    }
    else if(isLetter(fullname)==0){
        errorfullname.innerHTML = "Name can only be alphabet [A-Z / a-z]!"
    }
    else{
        errorfullname.innerHTML = "";
    }

    if(username.value.length < 5){
        errorusername.innerHTML = "Username is too short, it must be at least 5 characters!";
    }
    else{
        errorusername.innerHTML = "";
    }
    if(!email.value.endsWith("@gmail.com")){
        erroremail.innerHTML = "Invalid email format, please use gmail!"
    }
    else if(email.value.length <= 0){
        erroremail.innerHTML = "Email cannot be empty!"
    }
    else{
        erroremail.innerHTML = "";
    }
    if(password.value.length < 8){
        errorpassword.innerHTML = "Password is too short must be at least 8 characters";
    }
    else{
        errorpassword.innerHTML = "";
    }
    if(confirm_password.value != password.value || password.value.length < 8){
        errorconfirmpassword.innerHTML = "Confirm password does not match with the entered password"
    }
    else{
        errorconfirmpassword.innerHTML = "";
    }
    if(address.value.length <= 0){
        erroraddress.innerHTML = "Address cannot be empty!"
    }
    else{
        erroraddress.innerHTML = ""
    }
    if(checkbox1.checked == false){
        errorcheckbox.innerHTML = "Checkbox must be checked"
    }
    else{
        errorcheckbox.innerHTML = "";
    }
}