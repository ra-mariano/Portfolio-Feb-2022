document.getElementById("aboutme").addEventListener("click", aboutClick);
document.getElementById("aboutclose").addEventListener("click", aboutClose);
document.getElementById("works").addEventListener("click", worksOver);
//document.getElementById("works").addEventListener("mouseout", worksOut);
document.getElementById("workspopup").addEventListener("mouseover", worksPopUp);
//document.getElementById("workspopup").addEventListener("mouseout", worksPopOut);
document.getElementById("worksclose").addEventListener("click", worksPopOut);
document.getElementById("aboutme").addEventListener("click", aboutMe);
document.getElementById("reactplusjs").addEventListener("mouseover", reactjsOver);
document.getElementById("reactplusjs").addEventListener("mouseout", reactjsOut);
document.getElementById("wppluselem").addEventListener("mouseover", wpelemOver);
document.getElementById("wppluselem").addEventListener("mouseout", wpelemOut);
document.getElementById("contact").addEventListener("click", contactClick);
document.getElementById("closebutton").addEventListener("click", contactOut);

document.getElementById("aboutme").addEventListener("mouseover", aboutLine);
document.getElementById("aboutme").addEventListener("mouseout", aboutLineOut);
document.getElementById("works").addEventListener("mouseover", worksLine);
document.getElementById("works").addEventListener("mouseout", worksLineOut);
document.getElementById("contact").addEventListener("mouseover", contactLine);
document.getElementById("contact").addEventListener("mouseout", contactLineOut);


function aboutClick() {
  document.getElementById("aboutpopup").style.visibility = "visible";
  document.getElementById("title").style.visibility = "hidden";
  document.getElementById("navmenu").style.visibility = "hidden"
  document.getElementById("aboutpopup").animate([
    {opacity : 0},
  {opacity : 1}], {
  duration: 700,
})

} 

function aboutClose() {
 
  
    document.getElementById("aboutpopup").style.visibility = "hidden"
    document.getElementById("bio-title").style.visibility = "hidden"
    document.getElementById("bio").style.visibility = "hidden"
    document.getElementById("title").style.visibility = "visible"
    document.getElementById("navmenu").style.visibility = "visible"
    } 


function worksOver() {
  
  document.getElementById("workspopup").style.visibility = "visible";
  document.getElementById("bio-title").style.visibility = "hidden";
  document.getElementById("title").style.visibility = "hidden";
  document.getElementById("navmenu").style.visibility = "hidden"
  document.getElementById("workspopup").animate([
    {opacity : 0},
  {opacity : 1}], {
  duration: 700,
})
document.getElementById("bio").style.visibility = "hidden";
}

/*function worksOut() {
  document.getElementById("workspopup").style.visibility = "hidden"
}*/

function worksPopUp() {
  document.getElementById("workspopup").style.visibility = "visible"
  document.getElementById("title").style.visibility = "hidden"
  
}

function worksPopOut() {
  
document.getElementById("workspopup").style.visibility = "hidden"
document.getElementById("title").style.visibility = "visible"
document.getElementById("navmenu").style.visibility = "visible"
} 

function aboutMe() {
  document.getElementById("bio").style.visibility = "visible";
  document.getElementById("bio-title").style.visibility = "visible";
  document.getElementById("title").style.visibility = "hidden";

document.getElementById("bio").animate([
  { transform: 'translateY(100px)' },
  { transform: 'translateY(0px)' }], {
duration: 1100,
})
document.getElementById("bio").animate([
  {opacity : 0},
{opacity : 1}], {
duration: 1400,
})
document.getElementById("bio-title").animate([
  {opacity : 0},
{opacity : 1}], {
duration: 2000,
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
document.getElementById("title").style.visibility = "hidden";
document.getElementById("navmenu").style.visibility = "hidden";
}



function contactOut() {
 document.getElementById("formcontainer").style.visibility = "hidden";
 document.getElementById("bio-title").style.visibility = "hidden";
 document.getElementById("title").style.visibility = "visible";
 document.getElementById("navmenu").style.visibility = "visible";
}

function aboutLine() {
  document.getElementById("aboutline").style.visibility = "visible";
  document.getElementById("aboutline").animate([
    {opacity : 0},
  {opacity : 1}], {
  duration: 400,
})
}

function aboutLineOut() {
  document.getElementById("aboutline").style.visibility = "hidden";
}

function worksLine() {
  document.getElementById("worksline").style.visibility = "visible";
  document.getElementById("worksline").animate([
    {opacity : 0},
  {opacity : 1}], {
  duration: 400,
})
}

function worksLineOut() {
  document.getElementById("worksline").style.visibility = "hidden";
}

function contactLine() {
  document.getElementById("contactline").style.visibility = "visible";
  document.getElementById("contactline").animate([
    {opacity : 0},
  {opacity : 1}], {
  duration: 400,
})
}

function contactLineOut() {
  document.getElementById("contactline").style.visibility = "hidden";
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




