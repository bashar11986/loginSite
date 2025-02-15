const passField = document.querySelector('.pass');
const showBtn = document.querySelector('.show');
//console.log(showBtn)
showBtn.addEventListener('click', function () {
  console.log("passField:  ",passField)
  console.log("showBtn:  ",showBtn)
  document.getElementById('successLoginId').innerHTML = "";
  if (passField.type == "password") {
    passField.type = "text";
    //showBtn.textContent = "إخفاء";         
    showBtn.innerHTML = '<img src="./images/eye2.png"/>'
  }
  else {
    passField.type = "password";
    //showBtn.textContent = "عرض";
    showBtn.innerHTML = '<img src="./images/eye3.png"/>'
  }
});




function clickBtn() {

  const usernameVal = document.getElementById('userNameId').value;
  const passwordVal = document.getElementById('passwordId').value;
  const contObj = document.getElementById('successLoginId')
  console.log(" username : ",usernameVal)
  console.log("password: ",passwordVal)
  if (usernameVal == "admin" && passwordVal == "123") { 
    contObj.style.color = "#fea046"
    contObj.innerHTML = 'تم تسجيل الدخول بنجاح'
    location.href = "./pages/home.html"
  }
  else 
  {
     contObj.style.color = "#fe3b42"
     contObj.innerHTML = 'فشل في تسجيل الدخول'
   
  }
}