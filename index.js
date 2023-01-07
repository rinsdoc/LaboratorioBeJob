function checkName() {
  var name = document.getElementById("name").value;
  var re = /^[a-zA-Z\s]+$/
    if (name.trim().length != 0 ) {
      if (re.test(name)) {
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("errorName").innerHTML = "";
        document.getElementById("errorTipName").innerHTML = "";
        document.getElementById("errorTipName").style.visibility = "hidden";
        document.getElementById("name").style.backgroundImage = "url(images/success-icon.svg)";
      } else {
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("errorName").innerHTML = "Nombre inválido";
        document.getElementById("name").style.backgroundImage = "url(images/error-icon.svg)";

        document.getElementById("errorTipName").innerHTML = "El nombre solo acepta letras mayúsculas y minúsculas.";
        document.getElementById("errorTipName").style.visibility = "visible";
        document.getElementById("errorTipName").style.display = "inline-block";
      }
    }
    else {
      document.getElementById("name").style.borderColor = "red";
      document.getElementById("errorName").innerHTML = "Rellene este campo";
      document.getElementById("name").style.backgroundImage = "url(images/error-icon.svg)";
      document.getElementById("errorTipName").style.visibility = "hidden";
      document.getElementById("errorTipName").style.display = "none";
    }
}

function checkEmail() {
  var email = document.getElementById("email").value;
  var re = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    if (email.trim().length != 0 ) {
      
      if (re.test(email)) {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("errorEmail").innerHTML = "";
        document.getElementById("errorTipEmail").innerHTML = "";
        document.getElementById("errorTipEmail").style.visibility = "hidden";
        document.getElementById("errorTipEmail").style.display = "none";
        document.getElementById("email").style.backgroundImage = "url(images/success-icon.svg)";
      } else {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("errorEmail").innerHTML = "Email inválido";
        document.getElementById("email").style.backgroundImage = "url(images/error-icon.svg)";
        
        checkEmailString();
      }

    }
    else {
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("errorEmail").innerHTML = "Rellene este campo";
      document.getElementById("email").style.backgroundImage = "url(images/error-icon.svg)";
      document.getElementById("errorTipEmail").style.display = "none";
    }
}

function checkEmailString() {
  var email = document.getElementById("email").value;
  let result = email.indexOf("@");
  if (result == -1) {
    document.getElementById("errorTipEmail").innerHTML = 'Incluye un signo "@" en la dirección de correo electrónico. La dirección '+email+' no incluye el signo "@" ';
    document.getElementById("errorTipEmail").style.visibility = "visible";
    document.getElementById("errorTipEmail").style.display = "inline-block";
  } else {
    if (!email.includes(".",result)) {
    document.getElementById("errorTipEmail").innerHTML = 'Incluye un signo "." en la dirección de correo electrónico después del @. La dirección '+email+' no incluye el signo "." ';
    document.getElementById("errorTipEmail").style.visibility = "visible";
    document.getElementById("errorTipEmail").style.display = "inline-block";
    }
  }
}

function checkPswd1() {
  var pswd1 = document.getElementById("pswd1").value;
  var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if (pswd1.trim().length != 0 ) {
      if (pswd1.trim().length >= 8 ) {
        if (re.test(pswd1)) {
          document.getElementById("pswd1").style.borderColor = "green";
          document.getElementById("errorPswd1").innerHTML = "";
          document.getElementById("errorTipPswd1").innerHTML = "";
          document.getElementById("errorTipPswd1").style.visibility = "hidden";
          document.getElementById("errorTipPswd1").style.display = "none";
          document.getElementById("pswd1").style.backgroundImage = "url(images/success-icon.svg)";
        } else {
          document.getElementById("pswd1").style.borderColor = "red";
          document.getElementById("errorPswd1").innerHTML = "Contraseña no válida";
          document.getElementById("pswd1").style.backgroundImage = "url(images/error-icon.svg)";

          document.getElementById("errorTipPswd1").innerHTML = "La contraseña debe tener al menos 8 caracteres, mayúsculas, minúsculas y al menos un caracter especial.";
          document.getElementById("errorTipPswd1").style.visibility = "visible";
          document.getElementById("errorTipPswd1").style.display = "inline-block";
          
        }
      }
      else {
        document.getElementById("pswd1").style.borderColor = "red";
        document.getElementById("errorPswd1").innerHTML = "La contraseña debe tener al menos 8 caracteres";
        document.getElementById("pswd1").style.backgroundImage = "url(images/error-icon.svg)";
        document.getElementById("errorTipPswd1").style.visibility = "hidden";
        document.getElementById("errorTipPswd1").style.display = "none";
      }
    }
    else { 
      document.getElementById("errorPswd1").innerHTML = "Rellene este campo";
      document.getElementById("pswd1").style.borderColor = "red"; 
      document.getElementById("pswd1").style.backgroundImage = "url(images/error-icon.svg)";
      document.getElementById("errorTipPswd1").style.display = "none";
    }
}

function checkPswd2() {
  var pswd2 = document.getElementById("pswd2").value;
  var pswd1 = document.getElementById("pswd1").value;
    if (pswd2.trim().length != 0 ) {
      
      if (pswd1 === pswd2) {
        document.getElementById("pswd2").style.borderColor = "green";
        document.getElementById("errorPswd2").innerHTML = "";
        document.getElementById("pswd2").style.backgroundImage = "url(images/success-icon.svg)";

      } else {
        document.getElementById("pswd2").style.borderColor = "red";
        document.getElementById("errorPswd2").innerHTML = "Las contraseñas no coinciden";
        document.getElementById("pswd2").style.backgroundImage = "url(images/error-icon.svg)";
      }

    }
    else {
      document.getElementById("errorPswd2").innerHTML = "Rellene este campo";
      document.getElementById("pswd2").style.borderColor = "red";
      document.getElementById("pswd2").style.image
      document.getElementById("pswd2").style.backgroundImage = "url(images/error-icon.svg)";
    }
}

function summit() {
  var name = document.getElementById("name").style.borderColor;
  var email = document.getElementById("email").style.borderColor;
  var pswd1 = document.getElementById("pswd1").style.borderColor;
  var pswd2 = document.getElementById("pswd2").style.borderColor;

    if (name && email && pswd1 && pswd2 === "green") {
      alert("La inscripción ha sido correcta")
    }
}