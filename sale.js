function validate(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const phoneno = document.getElementById("phoneno").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;
 const language = document.getElementById("language").value;
  const skill = document.getElementById("skill").value;



  
  if (!username) {
      document.getElementById("error").innerHTML = "enter your username";
  } else {
      document.getElementById("error").innerHTML = "";
  }
  if (!phoneno) {
      document.getElementById("error2").innerHTML = "enter your phoneno";
  } else {
      document.getElementById("error2").innerHTML = "";

  }
  if (!email) {
      document.getElementById("error3").innerHTML = "enter your email";
  } else {
      document.getElementById("error3").innerHTML = "";
  }
  if (!address ) {
       document.getElementById("error4").innerHTML = "enter your address";
   } else {
        document.getElementById("error4").innerHTML = "";
   }
  if (!password ) {
      document.getElementById("error5").innerHTML = "enter your password";
  } else {
      document.getElementById("error5").innerHTML = "";
  }
  
    if (!gender ) {
      document.getElementById("error6").innerHTML = "enter your gender";
   } else {
     document.getElementById("error6").innerHTML = "";
 }
  if (!language ) {
    document.getElementById("error6").innerHTML = "enter your language";
 } else {
     document.getElementById("error6").innerHTML = "";
}
if (!skill ) {
    document.getElementById("error7").innerHTML = "enter your skill";
} else {
    document.getElementById("error7").innerHTML = "";
}


  const values = {
      'username': username,
      'phoneno': phoneno,
      'email': email,
      'address':address,
      'password': password,
      'gender':gender,
      'language':language,
      'skill':skill
  };


  console.log(values);

    localStorage.setItem('formValues', JSON.stringify(values));   
}