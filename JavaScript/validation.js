function validationForm() {
    const name = document.getElementById("exampleInputName1").value;
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    const number = document.getElementById("exampleInputNumber1").value;

    if (email === "" || !email.includes('@')) { 
     document.getElementById('emailError').textContent="Please enter a valid e-mail address."
      return false; 
    }

    if (password === "") { 
      document.getElementById('passwordError').textContent="Please enter your password"
      return false; 
    } 

    if (password.length < 6) { 
      document.getElementById('passwordError').textContent="Password should be at least 6 characters long";
      return false; 
    } 

    if (name === "") {
      document.getElementById('nameError').textContent = "Please enter the name ";
      return false;
    }

    var phoneNumberPattern = /^[0-9]{10}$/;
    if (!phoneNumberPattern.test(number)) {
      document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
      return false;
    }

    
    return true;
  }