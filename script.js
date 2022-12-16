var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var passwordError=document.getElementById('password-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error')
function validatename(){
    var name=document.getElementById('contact-name').value;
     
    if(name.length<4 && name.length>0){
        nameError.innerHTML='Name is Invalid';
        return false;
    }
    else if(name.length==0){
        nameError.innerHTML='Name is required ';
          return false;
      } 
      else{

//      if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){ //first letter capital, 2nd for space ,3rd for a to z small or capital,
//    nameError.innerHTML='Write full name!!';
//   return false;

//      }
    
     nameError.innerHTML='<i style="color:green" class="fa fa-check-circle"></i>';
     return true;
      }
}
function  validatephone(){
    var phone=document.getElementById('contact-phone').value;
   if(phone.length==0){
    phoneError.innerHTML='Phone no is required ';
    return false;
   }
   else if(phone.length !==10){
    phoneError.innerHTML='Phone no should be 10 digits only';
    return false; 
   }
   
   if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML='Only digit please ';
    return false;
   }
   

 phoneError.innerHTML='<i style="color:green" class="fa fa-check-circle"></i>';
 return true;



}
function validateemail(){
    var email=document.getElementById("contact-email").value;
    if(email.length==0){
        emailError.innerHTML='Email is required ';
        return false;
}
 if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML='Email Invalid ';
    return false;

}
emailError.innerHTML='<i style="color:green" class="fa fa-check-circle"></i>';
return true;
}
function validatepassword(){
    var password=document.getElementById('contact-password').value;
    if(password.length==0){
        passwordError.innerHTML='Password is required ';
        return false;

    }
    if(password.length<8 && password.length!=0){
    
     passwordError.innerHTML='Password should be 8 characters.';
     return false;
    }
passwordError.innerHTML='<i style="color:green" class="fa fa-check-circle"></i>';
return true;
}
function validatemessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left=required-message.length;
    if(left>0){
        messageError.innerHTML=left+''+'more characters required';
        return false;

    }
    messageError.innerHTML='<i style="color:green" class="fa fa-check-circle"></i>'
    return true;
}
function validateForm(){
    if(!validatename() || !validatephone() || !validateemail()|| !validatemessage()){
   submitError.innerHTML="Please fixed error for Submit."
   return false;
    }
}