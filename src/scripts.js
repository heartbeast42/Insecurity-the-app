function showNav() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}

export {
  showNav(),
  closeNav()
}
