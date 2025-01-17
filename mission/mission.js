const themeSelect = document.getElementById("page-select");
const mission = document.querySelector(".mission");
const logo = document.querySelector(".logo");

function changeTheme() {
  const selectedTheme = themeSelect.value;
  mission.id = selectedTheme;
  
  if (selectedTheme == "dark") {
    logo.src = "byui-logo_white.png"
  }
  else {
    logo.src = "byui=logo.webp"
    }
  }
themeSelect.addEventListener("change", changeTheme);