var nameInput = document.getElementById("name");
var pnr = document.getElementById("pnr");
var emailInput = document.getElementById("email");
var pass = document.getElementById("pass");
var conpass = document.getElementById("conpass");
var cityInput = document.getElementById("city");

nameInput.addEventListener("blur", function(){
    let regex=/^[a-z A-Z 0-9'\-\!\#\$\%\&\'\*\+\/\=\?\^\_\|\{\}\~\\]{2,30}$/;
    let name = nameInput.value;
    if(regex.test(name)){
        document.getElementById("nameError").innerHTML="";
    }
    else{
        document.getElementById("nameError").innerHTML="**Invalid name input";
    }
});

pnr.addEventListener("blur", function(){
    let regex= /^(\+91-|91|0)?[6-9]{1}[0-9]{9}$/;
    let phone = pnr.value;
    if(regex.test(phone)){
        document.getElementById("pnrError").innerHTML="";
    }
    else{
        document.getElementById("pnrError").innerHTML="**Invalid phone number input";
    }
});

emailInput.addEventListener("blur", function(){
    let regex= /^([0-9a-zA-Z_\-\!\#\$\%\&\'\*\+\/\=\?\^\_\|\{\}\~\\]+)@([0-9a-zA-Z_\-\.]+)([0-9a-zA-Z_\-]+)\.([a-zA-Z]){2,7}$/;
    let email = emailInput.value;
    if(regex.test(email)){
        document.getElementById("emailError").innerHTML="";
    }
    else{
        document.getElementById("emailError").innerHTML="**Invalid email input";
    }
});

pass.addEventListener("blur", function(){
    let regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let passWord =pass.value;
    if(regex.test(passWord)){
        document.getElementById("passError").innerHTML="";
    }
    else{
        document.getElementById("passError").innerHTML="**Invalid password";
    }
});

conpass.addEventListener("blur", function(){

    
    if(conpass.value==pass.value){
        document.getElementById("conpassError").innerHTML="";
    }
    else{
        document.getElementById("conpassError").innerHTML="**Does not match password";
    }
});

cityInput.addEventListener("blur", function(){

    let regex=/^[a-z A-Z 0-9 \-\!\#\$\%\&\'\*\+\/\=\?\^\_\|\{\}\~\\]{2,30}$/;
    let city=cityInput.value;
    if(regex.test(city)){
        document.getElementById("cityError").innerHTML="";
    }
    else{
        document.getElementById("cityError").innerHTML="**Invalid city input";
    }
});

function func(){
    if(nameInput.value == "" || pnr.value == "" || emailInput.value == "" || pass.value == "" || conpass.value == "" || cityInput.value == ""){
        alert("Fill all the fields");
    }
}