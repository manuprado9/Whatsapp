document.querySelector('form').addEventListener('submit',function(){
   event.preventDefault();
//    console.log("Hello");
var countryCode=document.querySelector('#country-code').value;
var mobileNumber=document.querySelector('#mobile-number').value;
var url=`https://api.whatsapp.com/send?phone=${countryCode}${mobileNumber}`;
window.location.href=url;
});






// https://api.whatsapp.com/send?phone=919122102491&text=hello

// https://api.whatsapp.com/send?phone=919122102491
