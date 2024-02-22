
  var modeSwitch = document.querySelector('.mode-switch');
  modeSwitch.addEventListener('click', function () {                      document.documentElement.classList.toggle('light');
   modeSwitch.classList.toggle('active');
  });

  function toggleLogout() {
    var logoutOption = document.querySelector('.logout-option');
    logoutOption.style.display = (logoutOption.style.display === 'block') ? 'none' : 'block';
  }
  
  function logout() {
    // Your logout functionality here
    alert('Logged out successfully');
  }