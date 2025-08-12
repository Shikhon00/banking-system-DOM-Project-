document.getElementById('submitBtn').addEventListener('click', function () {
    
    const userEmail = document.getElementById('userMail');
    const userpass = document.getElementById('userPass');
    const email = userEmail.value;
    const password = userpass.value;
    
    if(email=="" && password==""){
        alert("Please enter the email and Password");
    }else if(email!="admin@gmail.com"){
        alert("Email not found");
        
    }else if(password == 123456){

        window.location.href="./bank.html";
    }else{
        alert("Incorrect password");
    }

});
