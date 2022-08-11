document.querySelector(".openChatBtn").addEventListener("click", openForm);
document.querySelector(".close").addEventListener("click", closeForm);
function openForm() {
   document.querySelector(".openChat").style.display = "block";
}
function closeForm() {
   document.querySelector(".openChat").style.display = "none";
}

function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
   if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
      }
   }
}