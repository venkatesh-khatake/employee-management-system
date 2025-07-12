function register(){
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(username && email && password){
    localStorage.setItem("user", JSON.stringify({username, email, password}));
    alert("registration successful");

      window.location.href = "login.html";
      
      document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

  }
  else{
    alert("please fill in both fields.")
  }
}

const regBtn = document.getElementById('register-btn');

if (regBtn) {
  regBtn.addEventListener('click', function (e) {
    e.preventDefault(); // prevents page reload
    register();
  });
}

// --------------------------------------------------

function login(){
  const logEmail = document.getElementById('log-email').value;
  const logPass = document.getElementById('log-password').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if(storedUser && logEmail === storedUser.email && logPass === storedUser.password ){
    alert("Login successful");
    document.getElementById('log-email').value = "";
    document.getElementById('log-password').value = "";

  }
  else{
    alert('Invalid userEmail and password.')
  }
}
  logEmail = "";
  logPass = "";

const logBtn = document.getElementById('log-btn');
if (logBtn) {
  logBtn.addEventListener('click', function (e) {
    e.preventDefault(); // prevents page reload
    login();
  });
  
}