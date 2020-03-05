
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


//functions
//show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//email valid
function checkEmail(input){
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(re.test(input.value.trim())){
    showSuccess(input);
   }
   else{
       showError(input, 'Email is not valid')
   }
}

//get field names
function getFieldName(input){
    //Uppercase first char from id
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check required fileds
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        //console.log(input);
        if (input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        }
        else{
            showSuccess(input);
        }
    });
}

//check length of inputs
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min}`);
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max}`);
    }
    else{
        showSuccess(input);
    }
}


//confrim passwords
function passwordConfirm(inputOne, inputTwo){
    if (inputOne.value === inputTwo.value){
        showSuccess(inputTwo);
    }else{
        showError(inputTwo, 'Passwords do not match');
    }
}

//Event listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(username.value);
    //console.log('submit');
    checkRequired([username,email,password,confirmPassword]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    passwordConfirm(password, confirmPassword);
});





    
// simple version using if statements
    // if(username.value === ''){
    //     showError(username, "Username is required");
    // }
    // else{
    //     showSuccess(username);
    // }

    // if(email.value === ''){
    //     showError(email, "Email is required");
    // }else if(!isValidEmail(email.value)){
    //     showError(email, "Email is not valid")
    // }else{
    //     showSuccess(email);
    // }

    // if(password.value === ''){
    //     showError(password, "Password is required");
    // }else{
    //     showSuccess(password);
    // }

    // if(confirmPassword.value === ''){
    //     showError(confirmPassword, "Password is required");
    // }else{
    //     showSuccess(confirmPassword);
    // }
