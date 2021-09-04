
import './Home.css';
import $ from 'jquery';

import back from "C:/Users/shashank r y/Athfix/athfixhome/src/FirstBanner.gif";

function Home(){
    return(<><div id="homeIcon">
        <p id="logo"></p>
        <h></h>
        <button id="logIn">Login</button>
        <button id="signIn">Sign in</button>
        <button id="menu"></button>
        </div>
        
        <div id="banner">
        <div id="BigBan">
           <p id="bigText">In the Digital world you can learn any skills sitting at any corner of the world</p>
           <a id="getLink" href="#">Athfix store</a>
        </div>
        </div>

      <button id="back"></button>
        <div id="Icon">
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
          
        </div>
      <button id="next"></button>
      <a href="#" id="IconText">Podcast</a>
      
      <p id="headSt">Lets Explore</p> 
      <div id="athfixStore">
         <li><p id="fli">Get into the learning platform of Info and grab the course<br/>
         <a href="#" id="pew">Athfix store</a></p></li>
         <li><p id="sli">Listen to the amazing podacst with best lessoning platform<br/><a href="#" id="pew">Podcast</a></p></li>
         <li><p id="tli">Learn the top and most awaited course in Athfix info<br/><a href="#" id="pew">Athfix store</a></p></li>
         <li><p id="oli">Learn graphics related course<br/><a href="#" id="pew">Athfix store</a></p></li>
         <li><p id="ili">Are you intrested in the embedded editors /compilers of learning platform<br/><a href="#" id="pew">Get API</a></p></li>
         <li><p id="eli">Use AI voice generator for the fluent smooth voice for your podcast/videos<br/><a href="#" id="pew">processing</a></p></li>
      </div>
       

       <div id="videoCard">
          What is the Learning platform?
       </div>

       <div id="lastInfo">
       <p id="Every"></p>
          <k>You will find most of courses in Athfix info platform</k><a href="" id="explore">Explore</a>
       <p id="AGP"></p>
         <l>Learn Graphics design, programming and lesson to podcast using Info platform</l><a href="" id="explore1">Athfix store</a>
       <p id="NIP"></p><p id="MIP"></p>
         <m>you can get info app in Android, IOS along with apps</m><a href="" id="explore2">Get it</a>
       </div>

       <p id="boat"></p>
      <div id="wave">
      </div>

     <j>Explore info courses</j>
      <div id="topCourse">
      <p id="k">Web development course</p>
         <p id="webDev">
            <li><n>learn web development from basic to advanced</n></li> 
            <li><n>Learn ReactJS to advanced</n></li>
            <li><n>learn AngularJS to advanced</n></li>
         </p>

      <p id="k">Learn top programming language</p>
         <p id="program">
         <li><n>learn c programming</n></li>
         <li><n>learn python programming</n></li>
          <li><n>learn microcontroller programming</n></li>
         </p>
     
      </div>

   <footer>
      <p id="company">
       Company
       <li>About</li>
       <li>Blog</li>
       <li>Carrer</li>
       <li>Affliate</li>
      </p>

      <p id="exploreIt">
      Explore
      <li>Creative</li>
      <li>Buisness</li>
      <li>Technology</li>
      </p>

      <p id="Teach">
      Teaching
      <li>Career</li>
      <li>Teacher</li>
      <li>Books</li>
      </p>

      <p id="Mobile">
         Get our Apps
      <li>IOS</li>
      <li>Android</li>
      </p>

      <div id="last">
         <li>© Athfix info 2021</li>
         <li>Help</li>
         <li>Privacy</li>
         </div>

         <div id="follow">
            Follow us on<br/>
            <li><svg id="log" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(252, 192, 81);" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg></li>
            <li><svg id="log" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(252, 192, 81);" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></li>
            <li><svg  id="log" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(252, 192, 81);" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg></li>
         </div>
   </footer>
    
    <div id="menuIcon">
       <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="rgb(252, 192, 81)" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg>Home</li>
       <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="rgb(252, 192, 81)" class="bi bi-shop" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
</svg>Info store</li>
       <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="rgb(252, 192, 81)" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>Popular course</li>
       <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="rgb(252, 192, 81)" class="bi bi-archive-fill" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>Feedback</li>
       <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="rgb(252, 192, 81)" class="bi bi-question-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
</svg>Help</li>
       <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="rgb(252, 192, 81)" class="bi bi-bank2" viewBox="0 0 16 16">
  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
</svg>Privacy</li>
<li>Log in</li>
<li>Sign in</li>
    </div>
        </>)
}


var BanText=["In the Digital world you can learn any skills sitting at any corner of the world",
"Why info is different from other course providing platform ?","Get the Podcast, Courses of the Athfix info in its learning platform",
"From the best programming to the machine learning from athfix learning platform"];
var ButText=["Athfix Store","Browse it","Athfix Store","Get it"];
var TexIco=["Podcast","Cryptocurrency","programming","AI","Communication skills","Personality development","Books","Philosophy"];

$("document").ready(function(){
   var count=0;
   var BackBa= document.querySelector("#banner");
   var BigTex= document.querySelector("#bigText");
   var ButTe= document.querySelector("#getLink");

     setInterval(()=>{
        count++; if(count>=BanText.length){count=0;}
       BigTex.style.marginTop=ButTe.style.marginTop="800px";
         setTimeout(()=>{
            BigTex.style.marginTop='10px';
            ButTe.style.marginTop="-5px";
            BigTex.innerHTML=BanText[count];
            ButTe.innerHTML=ButText[count];
         },1000)//1000
         
     },18000);//18000

  var  nextCount=0;
     $("#next").click(function(){
       nextCount++;if(nextCount>=TexIco.length){nextCount=0}
       $("#IconText").html(TexIco[nextCount]+'');
       if(nextCount>4){$("#Icon").scrollLeft("550");}
       else if(nextCount<4){$("#Icon").scrollLeft("0");}
     })

     $("#back").click(function(){
      nextCount--;if(nextCount<0){nextCount=TexIco.length-1}
      $("#IconText").html(TexIco[nextCount]+'');
      if(nextCount<4){$("#Icon").scrollLeft("0");}
      else if(nextCount>=4){ $("#Icon").scrollLeft("550");}
    })

    setInterval(()=>{
     let p= $(window).scrollTop();
     if(p>=2500){
     $("#boat").attr("style","right:"+p*0.25+"px");}
    },200);

    var menClick=true;
    $("#menu").click(function(){
       if(menClick==true){ $("#menuIcon").attr("style","left:0px");}
       else{ $("#menuIcon").attr("style","left:-300px"); }
       menClick=!menClick;
    })
    setInterval(() => {
       let p=$(window).width();let q=$(window).height();
       document.querySelector("h").innerHTML=(p+"x"+q);
    }, 100);

   
});



export default Home;