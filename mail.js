var emailError = document.getElementById('email-error')
var submitError = document.getElementById('submit-error')


  function validateEmail() {
    var email = document.getElementById("email-input").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)) {
        emailError.innerHTML = "Email is invalid";
        return false
    }
    emailError.innerHTML = '';
    return true;
    

}
 
function allowSubmition(){
 
  if(!validateEmail() ){
      submitError.style.display = 'block';
      submitError.innerHTML='Please fill the form'
      setTimeout(function(){submitError.style.display = 'none';},3000)
      return false
  }
  return true;
  alert('form submitted')
}



