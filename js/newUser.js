 // Get the modal
 var modal = document.getElementById("myModal");
  
 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

 function clicValid(){
const pass1val = document.getElementById('pass1').value;
const pass2val = document.getElementById('pass2').value;
var emailval = document.getElementById('emailid').value +"";

if(pass1val =="" || pass2val =="")  {alert("يجب أن لاتكون كلمة المرور فارغة"); return;}
else if(pass1val == pass2val)  alert("كلمتا المرور متطابقتان")
else  {alert("كلمتا المرور غير متطابقتين"); return;}
if(emailval ==""){alert("يجب أن لايكون البريد الالكتروني فارغ")
return;}
else{
  console.log("emailval1 : ",emailval)
  if(emailval.includes("@",0)){
    console.log("emailval2 : ",emailval)
    let atIndex = emailval.indexOf("@")
    let dotIndex = emailval.indexOf(".")
    console.log("atIndex: ",atIndex)
    console.log("dotIndex: ",dotIndex)
    if(emailval.includes(".",atIndex+3)&& emailval.length > dotIndex +3 )
    {alert("ايميل صحيح");
    let num1 = Math.floor(Math.random()*100);
    let num2 = Math.floor(Math.random()*100);
    let res = num1 + num2
    let person = prompt(" يرجى جمع العددين " + num1 + " , " + num2 );
    if(person == res)
    {
      alert("يمكنك الدخول لست روبوت")
      /*
      must install this pkg:
      in terminal: npm install express --save
                   npm install mssql --save
      then th folder node_modules and package.json will be added automatically
      */
     // Requiring modules

// node filename.js

  }
    else alert("النتيجة خاطئة لايمكنك الدخول، النتيجة الصحيحة هي: " + res)
  }
    else {alert("يجب أن يكون الاسم في الايميل مكون من ثلاث محارف على الأقل بعد الرمز  @")
  return;
  }
  }
  else {alert("يجب أن يحتوي الايميل على الرمز @")
return;
}
}



 }