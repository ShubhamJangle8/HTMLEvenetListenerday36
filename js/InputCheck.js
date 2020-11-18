const input = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
salary.addEventListener('input', function(){
  output.textContent = salary.value;
});

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.oninput =  function(){
let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if(nameRegex.test(text.value))
    textError.textContent = "";
  else
    textError.textContent = "Name is Incorrect";
};