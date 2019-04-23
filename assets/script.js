let graph_top_offset=0,graph_height=0;   
    document.getElementsByClassName("graph")[0].onload=function(){
      graph_top_offset=document.getElementsByClassName("graph")[0].offsetTop;
      graph_height=document.getElementsByClassName("graph")[0].height; 
      document.getElementsByClassName("main_section")[0].style.top=(graph_height+graph_top_offset+24)+"px";
      scrollFunction();
    }
    function scrollFunction() {
      if(window.scrollY==0){
        document.getElementsByClassName("main_section")[0].style.top=(graph_height+graph_top_offset+24)+"px";
        document.getElementsByClassName("main_section")[0].style.overflowY="hidden";
        document.getElementsByClassName("main_section")[0].style.left="16px";
        document.getElementsByClassName("main_section")[0].style.right="16px";
        document.getElementsByClassName("graph")[0].style.width="100%";
        document.getElementsByClassName("graph")[0].style.top="0px";
        document.getElementsByClassName("graph")[0].style.left="0px";
        document.getElementsByClassName("graph")[0].style.background="#fff";
        document.getElementsByClassName("graph")[0].style.borderLeft="4px solid rgba(0,0,0,0.15)";
        document.getElementsByClassName("graph")[0].style.borderBottom="4px solid rgba(0,0,0,0.15)";
      }
      else{
        document.getElementsByClassName("main_section")[0].style.top=(graph_top_offset)+"px";
        document.getElementsByClassName("graph")[0].style.width="160%";
        document.getElementsByClassName("main_section")[0].style.left="8px";
        document.getElementsByClassName("main_section")[0].style.right="8px";
        document.getElementsByClassName("graph")[0].style.top="-125px";
        document.getElementsByClassName("main_section")[0].style.overflowY="scroll";
        document.getElementsByClassName("graph")[0].style.left="-30%";
        document.getElementsByClassName("graph")[0].style.background="transparent";
        document.getElementsByClassName("graph")[0].style.borderLeft="0px solid rgba(0,0,0,0.15)";
        document.getElementsByClassName("graph")[0].style.borderBottom="0px solid rgba(0,0,0,0.15)";
      }
    }
    window.onscroll = scrollFunction;