document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault();
        //if you want to see the value
        const form = event.target
        console.log(form.username.value);
        console.log(form.email.value);
        const mobileNumber = parseInt(form.mobile.value);
    })
    
    document.getElementById("email").addEventListener("input" , function(event){
        const emailEelement = event.target;
        // console.log(emailEelement.value);
        if(emailEelement.validity.typeMismatch){
            emailEelement.setCustomValidity("Please Enter an E-mail ");
            emailEelement.reportValidity();
        }
        else{
            emailEelement.setCustomValidity("")
        }

    })


    document.addEventListener("click" , function(){
        
        console.log(document.getElementById("outside").value);
    })
})