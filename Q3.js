var emailInput= document.getElementById("email");
var passWord= document.getElementById("pass");
var emailRegex= /^([0-9a-zA-Z_\-\.]+)@([0-9a-zA-Z_\-\.]+)\.([a-zA-Z]){2,7}$/;
var passRegex= /\w{2,}/;

emailInput.addEventListener("blur", function(){
    let regex= /^([0-9a-zA-Z_\-\.]+)@([0-9a-zA-Z_\-\.]+)\.([a-zA-Z]){2,7}$/;
    let emailInputValue=emailInput.value;
    if(regex.test(emailInputValue)){
        document.getElementById("emailError").innerHTML="";
    }
    else{
        document.getElementById("emailError").innerHTML="**Invalid email address";
    }
});
passWord.addEventListener("blur", function(){
    let regex= /\w{2,}/;
    let passInputValue=passWord.value;
    if(regex.test(passInputValue)){
        document.getElementById("passError").innerHTML="";
    }
    else{
        document.getElementById("passError").innerHTML="**Invalid password";
    }
    });
var input = document.getElementById("pass");

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});
function sub()
{
    var EMAIL= emailInput.value;
    var PASS= passWord.value;        
    if(emailRegex.test(EMAIL) && passRegex.test(PASS))
    {
    var xhttp= new XMLHttpRequest();
        console.log(xhttp.readyState);
        xhttp.open("POST", "https://reqres.in/api/login", true);
        console.log(xhttp.readyState);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        console.log(xhttp.readyState);
        xhttp.send(`email=${EMAIL}&password=${PASS}`);
        console.log(xhttp.readyState);
        xhttp.onreadystatechange =function()
        {
            if(this.readyState == 4 && this.status == 200){
                var obj = JSON.parse(this.responseText);
                console.log(obj);
                alert("Login success");
            }
            else if(this.readyState == 4 && this.status != 200){
                alert("Check credentials");
            }
        }    
    }
}