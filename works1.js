let projects = document.getElementById("imagelinks")
document.getElementById("rightarrow").addEventListener("click", toTheRight);
document.getElementById("leftarrow").addEventListener("click", toTheLeft);
//document.getElementById("secondrightarrow").addEventListener("click", toTheRight2);





function toTheRight() {

if (projects.dataset.carouselstate==="centered") {  
console.log("working")
  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-390px)' }
  ],
  {
  
    duration: 300,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(-390px)';
  projects.dataset.carouselstate="right1"
}

else if (projects.dataset.carouselstate==="left1") {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(390px)' },
    { transform: 'translateX(0px)' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(0px)';
  projects.dataset.carouselstate="centered"
}

}



  


function toTheLeft() {

  if(projects.dataset.carouselstate==="centered") {
    document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(0px)' },
    { transform: 'translateX(390px)' }
  ],
  {
  
    duration: 200,
    
  });
  document.getElementById("imagelinks").style.transform = 'translateX(390px)';
  projects.dataset.carouselstate="left1"
}

else if (projects.dataset.carouselstate==="right1") {
  
    document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(-390px)' },
    { transform: 'translateX(0px)' }
  ],
  {
  
    duration: 200,
    
  });
  document.getElementById("imagelinks").style.transform = 'translateX(0px)';
  projects.dataset.carouselstate="centered"
}
}


  







/*

document.getElementById("reactcalculatorimg").addEventListener("mouseover", calcOver);
document.getElementById("reactcalculatorimg").addEventListener("mouseout", calcOut);
document.getElementById("reactdrummachineimg").addEventListener("mouseover", drumOver);
document.getElementById("reactdrummachineimg").addEventListener("mouseout", drumOut);
document.getElementById("reactpomodoroclockimg").addEventListener("mouseover", clockOver);
document.getElementById("reactpomodoroclockimg").addEventListener("mouseout", clockOut);

if (window.innerWidth > 1000) {
  
function calcOver() {
  document.getElementById("reactcalculatorimg").animate([
  
      {filter: "saturate(0%)"},
    {filter: "saturate(100%)"}], {
    duration: 400,
  })
  document.getElementById("reactcalculatorimg").style.filter= "saturate(100%)"
}

}

function calcOut() {
  document.getElementById("reactcalculatorimg").style.filter= "saturate(0%)"
}

function drumOver() {
  document.getElementById("reactdrummachineimg").animate([
  
      {filter: "saturate(0%)"},
    {filter: "saturate(100%)"}], {
    duration: 400,
  })
  document.getElementById("reactdrummachineimg").style.filter= "saturate(100%)"
}

function drumOut() {
  document.getElementById("reactdrummachineimg").style.filter= "saturate(0%)"
}



function clockOver() {
  document.getElementById("reactpomodoroclockimg").animate([
  
      {filter: "saturate(0%)"},
    {filter: "saturate(100%)"}], {
    duration: 400,
  })
  document.getElementById("reactpomodoroclockimg").style.filter= "saturate(100%)"
}

function clockOut() {
  document.getElementById("reactpomodoroclockimg").style.filter= "saturate(0%)"
}

}

*/

  