const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


function error(input, message){

    input.className ="form-control is-invalid" ;
    const div= input.nextElementSibling;
    div.innerText = message ;
    div.className = "invalid-feedback"
}


function succes(input){

    input.className ="form-control is-valid" ;

}

function validateEmail(input) {
    const re = /\S+@\S+\.\S+/;
    if (re.test(input.value)){
        succes(input);
    }else{
        error(input, "hatalı mail adresi.")
    };
  }

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === "") {
            error(input,`${input.id} girilmesi gerekiyor.`);
        } else {
            succes(input);
        }

    })
};

function checkLength(input,min,max){
    if (input.value.length < min){
        error(input,`${input.id} en az ${min} karakter olmalıdır.`)
    }else if (input.value.length > max) {
        error(input,`${input.id} en çok ${max} karakter olmalıdır.`)
    }else{
        succes(input);
    }

}

function checkPassword(input1,input2){
    if (input1.value !== input2.value){
        error(input2,"Parolalar eşleşmiyor");
    }

}

function checkPhone(input){
    var exp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

    if(!exp.test(input.value))
        error(input,`Telefon numarası 10 karakterli olmalıdır.`)
    
        

}

form.addEventListener("submit",function(e){
    e.preventDefault();

    checkRequired([username,email,password,repassword,phone]);
    validateEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,15);
    checkPassword(password,repassword);
    checkPhone(phone);

});
