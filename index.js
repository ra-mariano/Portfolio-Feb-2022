document.getElementById("works").addEventListener("mouseover", worksOver);
document.getElementById("works").addEventListener("mouseout", worksOut);
document.getElementById("workspopup").addEventListener("mouseover", worksPopUp);
document.getElementById("workspopup").addEventListener("mouseout", worksPopOut);

function worksOver() {
  document.getElementById("works").style.color = "red";
  document.getElementById("workspopup").style.visibility = "visible"
}

function worksOut() {
  document.getElementById("works").style.color = "gray";
  document.getElementById("workspopup").style.visibility = "hidden"
}

function worksPopUp() {
  document.getElementById("workspopup").style.visibility = "visible"
}

function worksPopOut() {
  document.getElementById("workspopup").style.visibility = "hidden"
}

