document.getElementById("works").addEventListener("mouseover", worksOver);
document.getElementById("works").addEventListener("mouseout", worksOut);
document.getElementById("workspopup").addEventListener("mouseover", worksPopUp);
document.getElementById("workspopup").addEventListener("mouseout", worksPopOut);
document.getElementById("aboutme").addEventListener("click", aboutMe)

function worksOver() {
  document.getElementById("works").style.color = "red";
  document.getElementById("workspopup").style.visibility = "visible";
  document.getElementById("workspopup").animate([
    {opacity : 0},
  {opacity : 1}], {
  duration: 700,
})
document.getElementById("bio").style.visibility = "hidden";
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

function aboutMe() {
  document.getElementById("bio").style.visibility = "visible";
  document.getElementById("bio").animate([
    {opacity : 0},
  {opacity : 1}], {
  duration: 1500,
})
document.getElementById("bio").animate([
  { transform: 'translateY(200px)' },
  { transform: 'translateY(0px)' }], {
duration: 1500,
})

}




