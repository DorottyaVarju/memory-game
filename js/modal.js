const modal = document.getElementById("myModal");

const icon = document.getElementsByClassName("icon")[0];

const span = document.getElementsByClassName("close")[0];

icon.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
