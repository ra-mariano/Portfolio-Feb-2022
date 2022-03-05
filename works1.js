let projects = document.getElementById("imagelinks")
document.getElementById("rightarrow").addEventListener("click", toTheRight);
document.getElementById("leftarrow").addEventListener("click", toTheLeft);
//document.getElementById("secondrightarrow").addEventListener("click", toTheRight2);


console.log(screen.width)
console.log(screen.availWidth)


function toTheRight() {

if (projects.dataset.carouselstate==="centered" && screen.width>=1350) {  
console.log("working")
  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(0px)' },
      { transform: 'translateX(calc(-350px - 8vw))' }
    ],
    {
    
      duration: 200,
      
    });
  
    document.getElementById("imagelinks").style.transform = 'translateX(calc(-350px - 8vw))';
    projects.dataset.carouselstate="scroll1"
}


else if (projects.dataset.carouselstate==="scroll1" && screen.width>=1350) {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-350px - 8vw))' },
    { transform: 'translateX(calc(-700px - 16vw))' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-700px - 16vw))';
  projects.dataset.carouselstate="scroll2"
 
}

else if (projects.dataset.carouselstate==="centered" && screen.width>=450  && screen.width<1350) {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(0px)' },
    { transform: 'translateX(calc(-350px - 8vw))' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-350px - 8vw))';
  projects.dataset.carouselstate="scroll1"
  console.log("scroll1 medium")
 
}

else if (projects.dataset.carouselstate==="scroll1" && screen.width>=450  && screen.width<1350) {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-350px - 8vw))' },
    { transform: 'translateX(calc(-700px - 16vw))' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-700px - 16vw))';
  projects.dataset.carouselstate="scroll2"
  console.log("scroll2 medium")
 
}

else if (projects.dataset.carouselstate==="scroll2" && screen.width>=450  && screen.width<1350) {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-700px - 16vw))' },
    { transform: 'translateX(calc(-1050px - 24vw))' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-1050px - 24vw))';
  projects.dataset.carouselstate="scroll3"
  console.log("scroll3 medium")
 
}

else if (projects.dataset.carouselstate==="scroll3" && screen.width>=450  && screen.width<1350) {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-1050px - 24vw))' },
    { transform: 'translateX(calc(-1400px - 32vw))' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-1400px - 32vw))';
  projects.dataset.carouselstate="scroll4"
 
}

else if (projects.dataset.carouselstate==="centered" && screen.width<450) {  
  console.log("working")
    document.getElementById("imagelinks").animate([
      // keyframes
      { transform: 'translateX(0px)' },
      { transform: 'translateX(calc(-350px - 8vw))' }
    ],
    {
    
      duration: 200,
      
    });
  
    document.getElementById("imagelinks").style.transform = 'translateX(calc(-350px - 8vw))';
    projects.dataset.carouselstate="scroll1"
  }
  
  
  else if (projects.dataset.carouselstate==="scroll1" && screen.width<450) {
  
    document.getElementById("imagelinks").animate([
      // keyframes
      { transform: 'translateX(calc(-350px - 8vw))' },
      { transform: 'translateX(calc(-700px - 16vw))' }
    ],
    {
    
      duration: 200,
      
    });
  
    document.getElementById("imagelinks").style.transform = 'translateX(calc(-700px - 16vw))';
    projects.dataset.carouselstate="scroll2"
    
  }

  else if (projects.dataset.carouselstate==="scroll2" && screen.width<450) {
  
    document.getElementById("imagelinks").animate([
      // keyframes
      { transform: 'translateX(calc(-700px - 16vw))' },
      { transform: 'translateX(calc(-1050px - 24vw))' }
    ],
    {
    
      duration: 200,
      
    });
  
    document.getElementById("imagelinks").style.transform = 'translateX(calc(-1050px - 24vw))';
    projects.dataset.carouselstate="scroll3"
    
  }

  else if (projects.dataset.carouselstate==="scroll3" && screen.width<450) {
  
    document.getElementById("imagelinks").animate([
      // keyframes
      { transform: 'translateX(calc(-1050px - 24vw))' },
      { transform: 'translateX(calc(-1400px - 32vw))' }
    ],
    {
    
      duration: 200,
      
    });
  
    document.getElementById("imagelinks").style.transform = 'translateX(calc(-1400px - 32vw))';
    projects.dataset.carouselstate="scroll4"
    
  }

}



  


function toTheLeft() {

  

if (projects.dataset.carouselstate==="scroll1" && screen.width>=1350) {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-350px - 8vw))' },
    { transform: 'translateX(0px)' }
    ],
    {
    
      duration: 300,
      
    });
  
    document.getElementById("imagelinks").style.transform ='translateX(0px)';
    projects.dataset.carouselstate="centered"
}

else if (projects.dataset.carouselstate==="scroll2" && screen.width>=1350) {
  
    document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-700px - 16vw)' },
    { transform: 'translateX(calc(-350px - 8vw))'  }
  ],
  {
  
    duration: 200,
    
  });
  document.getElementById("imagelinks").style.transform = 'translateX(calc(-350px - 8vw))';
  projects.dataset.carouselstate="scroll1"
}

else if (projects.dataset.carouselstate==="scroll1" && screen.width>=450  && screen.width<1350) {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-350px - 8vw))' },
    { transform: 'translateX(0px)' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(0px)';
  projects.dataset.carouselstate="centered"
  
}

else if (projects.dataset.carouselstate==="scroll2" && screen.width>=450  && screen.width<1350) {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-700px - 16vw))'},
    { transform: 'translateX(calc(-350px - 8vw))' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-350px - 8vw))';
  projects.dataset.carouselstate="scroll1"
  
}

else if (projects.dataset.carouselstate==="scroll3" && screen.width>=450  && screen.width<1350) {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-1050px - 24vw))' },
    { transform: 'translateX(calc(-700px - 16vw))'}
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-700px - 16vw))';
  projects.dataset.carouselstate="scroll2"
  
}

else if (projects.dataset.carouselstate==="scroll4" && screen.width>=450  && screen.width<1350) {

  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-1400px - 32vw))'},
    { transform: 'translateX(calc(-1050px - 24vw))' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-1050px - 24vw))';
  projects.dataset.carouselstate="scroll3"
  
}

else if (projects.dataset.carouselstate==="scroll1" && screen.width<450) {
  
  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-350px - 8vw))' },
    { transform: 'translateX(calc(0px))' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(0px))';
  projects.dataset.carouselstate="centered"
  
}

else if (projects.dataset.carouselstate==="scroll2" && screen.width<450) {
  
  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-700px - 16vw))' },
    { transform: 'translateX(calc(-350px - 8vw))' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-350px - 8vw))';
  projects.dataset.carouselstate="scroll1"
  
}

else if (projects.dataset.carouselstate==="scroll3" && screen.width<450) {
  
  document.getElementById("imagelinks").animate([
    // keyframes
    { transform: 'translateX(calc(-1050px - 24vw))' },
    { transform: 'translateX(calc(-700px - 16vw))' }
  ],
  {
  
    duration: 200,
    
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-700px - 16vw))' ;
  projects.dataset.carouselstate="scroll2"
  
}

else if (projects.dataset.carouselstate==="scroll4" && screen.width<450) {
  
  document.getElementById("imagelinks").animate([
   
    { transform: 'translateX(calc(-1400px - 32vw))' },
    { transform: 'translateX(calc(-1050px - 24vw))' }
  ],
  {
    duration: 200, 
  });

  document.getElementById("imagelinks").style.transform = 'translateX(calc(-1050px - 24vw))'  ;
  projects.dataset.carouselstate="scroll3"
  
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

  