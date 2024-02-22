document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});

document.querySelector(".grid").addEventListener("click", function () {
  document.querySelector(".list").classList.remove("active");
  document.querySelector(".grid").classList.add("active");
  document.querySelector(".products-area-wrapper").classList.add("gridView");
  document
    .querySelector(".products-area-wrapper")
    .classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
  document.querySelector(".list").classList.add("active");
  document.querySelector(".grid").classList.remove("active");
  document.querySelector(".products-area-wrapper").classList.remove("gridView");
  document.querySelector(".products-area-wrapper").classList.add("tableView");
});

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


function openPopupForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closePopupForm() {
  document.getElementById("popupForm").style.display = "none";
}

// Add an event listener to the button to open the pop-up form
document.querySelector(".app-content-headerButton").addEventListener("click", openPopupForm);