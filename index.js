document.getElementById("works").addEventListener("click", worksOver);
document.getElementById("works").addEventListener("mouseout", worksOut);
document.getElementById("workspopup").addEventListener("mouseover", worksPopUp);
document.getElementById("workspopup").addEventListener("mouseout", worksPopOut);
document.getElementById("aboutme").addEventListener("click", aboutMe);
document.getElementById("reactplusjs").addEventListener("mouseover", reactjsOver);
document.getElementById("reactplusjs").addEventListener("mouseout", reactjsOut);
document.getElementById("wppluselem").addEventListener("mouseover", wpelemOver);
document.getElementById("wppluselem").addEventListener("mouseout", wpelemOut);
document.getElementById("contact").addEventListener("click", contactClick);

document.getElementById("formcontainer").addEventListener("mouseout", contactOut);


function worksOver() {
  
  document.getElementById("workspopup").style.visibility = "visible";
  document.getElementById("bio-title").style.visibility = "hidden";
  document.getElementById("workspopup").animate([
    {opacity : 0},
  {opacity : 1}], {
  duration: 700,
})
document.getElementById("bio").style.visibility = "hidden";
}

function worksOut() {
  
  document.getElementById("workspopup").style.visibility = "hidden"
 
}

function worksPopUp() {
  document.getElementById("workspopup").style.visibility = "visible"
  
}

function worksPopOut() {
  
document.getElementById("workspopup").style.visibility = "hidden"
document.getElementById("title").style.visibility = "visible"
}

function aboutMe() {
  document.getElementById("bio").style.visibility = "visible";
  document.getElementById("bio-title").style.visibility = "visible";
  document.getElementById("title").style.visibility = "hidden";

document.getElementById("bio").animate([
  { transform: 'translateY(100px)' },
  { transform: 'translateY(0px)' }], {
duration: 1200,
})
document.getElementById("bio").animate([
  {opacity : 0},
{opacity : 1}], {
duration: 1600,
})
document.getElementById("title").animate([
  {opacity : 1},
{opacity : 0}], {
duration: 1600,
})


}

function reactjsOver() {
  document.getElementById("reactplusjs").animate([
  
      {filter: "saturate(0%)"},
    {filter: "saturate(100%)"}], {
    duration: 500,
  })
  document.getElementById("reactplusjs").style.filter= "saturate(100%)"
}

function reactjsOut() {
  document.getElementById("reactplusjs").style.filter= "saturate(0%)"
}

function wpelemOver() {
  document.getElementById("wppluselem").animate([
  
      {filter: "saturate(0%)"},
    {filter: "saturate(100%)"}], {
    duration: 500,
  })
  document.getElementById("wppluselem").style.filter= "saturate(100%)"
}

function wpelemOut() {
  document.getElementById("wppluselem").style.filter= "saturate(0%)"
}

function contactClick() {

  document.getElementById("formcontainer").style.visibility = "visible";
  document.getElementById("formcontainer").animate([
    {opacity : 0},
  {opacity : 1}], {
  duration: 700,
})
document.getElementById("bio").style.visibility = "hidden";
}



function contactOut() {
 document.getElementById("formcontainer").style.visibility = "hidden";
 document.getElementById("bio-title").style.visibility = "hidden";
 document.getElementById("title").style.visibility = "visible";
}




/*function sendMail() {


  Email.send({
  SecureToken : "43e3eb22-8888-4f3c-90da-b4315f510587",
  To: "ronan.a.mariano@gmail.com",
  From: document.getElementById("email"),
  Subject: "Check Email Sending",
  Body: "Testing",
  }).then(function (message) {
  alert("Email sent successfully")
  });

}*/




