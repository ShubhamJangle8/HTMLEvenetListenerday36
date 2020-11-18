const input = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
salary.addEventListener('input', function(){
  output.textContent = salary.value;
});

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.oninput =  function(){
let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if(nameRegex.test(text.value) || text.value == "")
    textError.textContent = "";
  else
    textError.textContent = "Name is Incorrect";
};

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
function takeEmail(){
let emailRegex = RegExp('^[a-zA-Z0-9_]+[-+.]?[A-Za-z0-9_]+@[A-Za-z0-9]+[.][a-z]{2,}[.]?([a-z]{2,})?$');
  if(emailRegex.test(email.value) || email.value == "")
    emailError.textContent = "";
  else
    emailError.textContent = "Provide valid email";
}

const phone = document.querySelector('#tel');
const phoneError = document.querySelector('.tel-error');
phone.addEventListener('input',function(){
    let phoneRegex = RegExp('^([0-9]{1,4}[ ][0-9]{10})$');
    if(phoneRegex.test(phone.value)){
        phoneError.textContent = "";
    }else{
        phoneError.textContent = "Phone number is incorrect";
    }
}); 