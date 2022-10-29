function scrollbar(){
    window.scrollTo(0,0)
  } 

  window.onscroll = function(){
    if(window.scrollY>800){
      document.querySelector(".arrow").style.display="block";
    }
    else{
      document.querySelector(".arrow").style.display="none";
    }
  
    if (window.scrollY>400) {
       document.getElementById("navbarevent").style.backgroundColor="white";
       document.getElementById("navbarevent").style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
       let items=document.querySelectorAll(".menuitem  li a");
        for(let item of items){
          item.style.color="black";
        }
    }   
   else if (window.scrollY<300) {
      document.getElementById("navbarevent").style.backgroundColor="black";
      document.getElementById("navbarevent").style.boxShadow="";
      let items=document.querySelectorAll(".menuitem li a");
        for(let item of items){

          item.style.color="";
        }

      }
  }
 