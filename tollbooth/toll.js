 var Tollgates = {
     Tollgate1 : {
         id :"T001",
         pairtollbooth : "T002",
         passingVehicle : {
               v101 : 1634517000000,//Mon Oct 18 2021 06:00:00 GMT+0530 (India Standard Time)
               v102: 1634488200000 ,//Tue Oct 19 2021 01:30:00 GMT+0530 (India Standard Time)
               v103 : 1634567400000,//Mon Oct 18 2021 20:00:00 GMT+0530 (India Standard Time)
            }
         },
     Tollgate2 :{
         id : "T002",
         pairtollbooth : "T001",
         passingVehicle :{
               v104 : 1634567400000,//Mon Oct 18 2021 20:00:00 GMT+0530 (India Standard Time)
               v105: 1634488200000 ,//Tue Oct 19 2021 01:30:00 GMT+0530 (India Standard Time)
               }                 
          }     
      }
 var d = Tollgates.Tollgate1.passingVehicle;
 var d1 = Tollgates.Tollgate2.passingVehicle;
 var x = []
 for(let key in d){
   x.push(key)
 }
 console.log(x);
 for(i = 0;i < x.length;i++){
    var el = document.createElement("div");   
    el.id = "slide1";
    var s = document.querySelector("#subroad1");
    s.appendChild(el);
    el.innerHTML = x[i]
    var v =  document.getElementById("subroad1").firstElementChild;
    v.addEventListener("click",drag);  
 }
 var r =[];
 for(let a1 in d1 ){
   r.push(a1)
 }
 console.log(r )
 for(i = 0;i < r.length;i++){
    var dv = document.createElement("div");   
    dv.id = "slide3";
    var y = document.querySelector("#subroad2");
    y.appendChild(dv); 
    dv.innerHTML = r[i];
 }
 var v =  document.getElementById("subroad1").firstElementChild;
   document.getElementById("tollroad1").appendChild(v)
   v.style = "margin-top : 530px; transform: rotate(180deg) scale(1.4)";
   var g =  document.getElementById("subroad1").firstChild;
   g.style = "margin-top : 80px";  
function drag(){    
        v.style = "margin-top : 280px; transform: rotate(180deg) scale(1.4)";
        setTimeout(drag1,5000)
}

function drag1(){
  // if(x != r){
  //   alert("charge is 50")
  // }else{
  //   alert("charge is 0")
  // }
    v.style = "margin-top : 20px; transform: rotate(180deg) scale(1.4)";       
    v.addEventListener("transitionend",drag2);     
}
function drag2(){    
    var k1 = document.querySelector("#subroad2");
    k1.appendChild(v)
    v.style = "margin-top : 15px;margin-left : 6px;transform: rotate(180deg)";  
    var m =  document.getElementById("subroad2").firstElementChild;
    var t = document.querySelector("#tollroad2");
    t.appendChild(m);
     m.style = "margin-top : 20px;transform : rotate(180deg) scale(1.4)"; 
     v.removeEventListener("transitionend",drag2);    
    setTimeout(wave,1000)  
}
function wave(){
   var m =  document.getElementById("tollroad2").firstElementChild;
   m.style ="margin-top : 300px;transform : rotate(180deg) scale(1.4)";
   setTimeout(wave1,4000)
}
function wave1(){
  // if(r != x){
  //   alert("charge is 50")
  // }else{
  //   alert("charge is 30")
  // }
   var m =  document.getElementById("tollroad2").firstElementChild;
   m.style ="margin-top : 530px;transform : rotate(180deg) scale(1.4)";
   m.addEventListener("transitionend",wave2);  
}
function wave2(){
    var m =  document.getElementById("tollroad2").firstElementChild;
      document.getElementById("subroad1").appendChild(m)   
      m.style ="margin-top :135px;margin-left : 25px;transform : rotate(180deg)"; 
     var g =  document.getElementById("subroad1").firstElementChild;
     document.getElementById("tollroad1").appendChild(g)
     g.style = "margin-top : 530px; transform: rotate(180deg) scale(1.4)";  
     m.removeEventListener("transitionend",wave2);   
     setTimeout(lite,1000)
}
 function lite(){      
     var g =  document.getElementById("tollroad1").lastChild;
     g.style = "margin-top : 280px;transform: rotate(180deg) scale(1.4)";
     setTimeout(lite1,4000)
 }
 function lite1(){
   var g =  document.getElementById("tollroad1").lastChild;
   g.style = "margin-top : 20px;transform: rotate(180deg) scale(1.4)";
   g.addEventListener("transitionend",lite2);   
 }
 function lite2(){
    var g =  document.getElementById("tollroad1").lastChild;    
    var k1 = document.querySelector("#subroad2");
    k1.appendChild(g)
    g.style = "margin-top : 20px;margin-left : 8px;transform: rotate(180deg)";  
    var m =  document.getElementById("subroad2").firstElementChild;
    var t = document.querySelector("#tollroad2");
    t.appendChild(m);
     m.style = "margin-top : 20px;transform : rotate(180deg) scale(1.4)"; 
     g.removeEventListener("transitionend",lite2);          
   setTimeout(lite3,1000)
 }
 function lite3(){
     var m = document.getElementById("tollroad2").firstElementChild;
     m.style = "margin-top : 300px;transform : rotate(180deg) scale(1.4)";
     setTimeout(mode1,4000);
 }
  function mode1(){ 
    var m = document.getElementById("tollroad2").firstElementChild;  
    m.style = "margin-top : 530px;transform: rotate(180deg) scale(1.4)";
    m.addEventListener("transitionend",mode2);      
 }
  function mode2(){       
    var g =  document.getElementById("subroad1").lastChild;
    g.style = "margin-left:25px; transform: rotate(180deg);transition : none"; 
    var g =  document.getElementById("subroad1").firstElementChild;
    document.getElementById("tollroad1").appendChild(g)
    g.style = "margin-top : 530px; transform: rotate(180deg) scale(1.4)";   
    var m = document.getElementById("tollroad2").firstElementChild;   
    var k2 = document.querySelector("#subroad1");
    k2.appendChild(m);
    m.style ="margin-left : 25px;transform : rotate(180deg)";  
    m.removeEventListener("transitionend",mode2); 
   setTimeout(mode3,1000);
  }
  function mode3(){      
    var g =  document.getElementById("tollroad1").lastChild;
    g.style = "margin-top : 280px;transform: rotate(180deg) scale(1.4)";
    setTimeout(mode4,4000)
}
function mode4(){
  var g =  document.getElementById("tollroad1").lastChild;
  g.style = "margin-top : 20px;transform: rotate(180deg) scale(1.4)";
 g.addEventListener("transitionend",entry1);   
}
function entry1(){
  var g =  document.getElementById("tollroad1").lastChild;    
  var k1 = document.querySelector("#subroad2");
  k1.appendChild(g)
  g.style = "margin-top : 20px;margin-left : 8px;transform: rotate(180deg)";  
  var m =  document.getElementById("subroad2").firstElementChild;
  var t = document.querySelector("#tollroad2");
  t.appendChild(m);
   m.style = "margin-top : 20px;transform : scale(1.4)"; 
   g.removeEventListener("transitionend",entry1);         
  setTimeout(entry2,1000);
}
function entry2(){
  var m = document.getElementById("tollroad2").firstElementChild;
  m.style = "margin-top : 300px;transform : scale(1.4)";
  setTimeout(entry3,4000);
}
function entry3(){
  var m = document.getElementById("tollroad2").firstElementChild;
  m.style = "margin-top : 530px;transform : scale(1.4)";
  m.addEventListener("transitionend",entry4)
}
function entry4(){
   var g =  document.getElementById("subroad1").lastChild;
    g.style = "margin-left:25px; transform: rotate(180deg);transition : none"; 
    var g =  document.getElementById("subroad1").firstElementChild;
    document.getElementById("tollroad1").appendChild(g)
    g.style = "margin-top : 530px; transform: scale(1.4)";   
    var m = document.getElementById("tollroad2").firstElementChild;   
    var k2 = document.querySelector("#subroad1");
    k2.appendChild(m);
    m.style ="margin-left : 25px";  
    m.removeEventListener("transitionend",entry4)
    setTimeout(f1,1000);
}
function f1(){      
  var g =  document.getElementById("tollroad1").lastChild;
  g.style = "margin-top : 280px;transform: scale(1.4)";
  setTimeout(f2,4000)
}
function f2(){
  var g =  document.getElementById("tollroad1").lastChild;
  g.style = "margin-top : 20px;transform: scale(1.4)";
  g.addEventListener("transitionend",f3);   
}
function f3(){
  var g =  document.getElementById("tollroad1").lastChild;    
  var k1 = document.querySelector("#subroad2");
  k1.appendChild(g)
  g.style = "margin-top : 130px";  
  var m =  document.getElementById("subroad2").firstElementChild;
  var t = document.querySelector("#tollroad2");
  t.appendChild(m);
  m.style = "margin-top : 20px;transform : scale(1.4)"; 
  g.removeEventListener("transitionend",f3);         
  setTimeout(f4,1000);
}
function f4(){
  var m = document.getElementById("tollroad2").firstElementChild;
  m.style = "margin-top : 300px;transform : scale(1.4)";
  setTimeout(f5,4000);
}
function f5(){
  var m = document.getElementById("tollroad2").firstElementChild;
  m.style = "margin-top : 530px;transform : scale(1.4)";
  m.addEventListener("transitionend",f6)
}
function f6(){
  var g =  document.getElementById("subroad1").lastChild;
   g.style = "margin-left:25px;transition : none"; 
   var g =  document.getElementById("subroad1").firstElementChild;
   document.getElementById("tollroad1").appendChild(g)
   g.style = "margin-top : 530px; transform: scale(1.4)";   
   var m = document.getElementById("tollroad2").firstElementChild;   
   var k2 = document.querySelector("#subroad1");
   k2.appendChild(m);
   m.style ="margin-left : 25px";  
   m.removeEventListener("transitionend",f6)
   setTimeout(f7,1000);
}
function f7(){      
  var g =  document.getElementById("tollroad1").lastChild;
  g.style = "margin-top : 280px;transform: scale(1.4)";
  setTimeout(f8,4000)
}
function f8(){
  var g =  document.getElementById("tollroad1").lastChild;
  g.style = "margin-top : 20px;transform: scale(1.4)";
  g.addEventListener("transitionend",f9);   
}
function f9(){
  var m =  document.getElementById("subroad2").lastChild;
   m.style = "transition : none"; 
  var g =  document.getElementById("tollroad1").lastChild;    
  var k1 = document.querySelector("#subroad2");
  k1.appendChild(g)
  g.style = "transform : none";  
  var m =  document.getElementById("subroad2").firstElementChild;
  var t = document.querySelector("#tollroad2");
  t.appendChild(m);
  m.style = "margin-top : 20px;transform : scale(1.4)"; 
  g.removeEventListener("transitionend",f9);         
  setTimeout(f10,1000);
}
function f10(){
  var m = document.getElementById("tollroad2").firstElementChild;
  m.style = "margin-top : 300px;transform : scale(1.4)";
  setTimeout(f11,4000);
}
function f11(){
  var m = document.getElementById("tollroad2").firstElementChild;
  m.style = "margin-top : 530px;transform : scale(1.4)";
  m.addEventListener("transitionend",f12)
}
function f12(){
  var g =  document.getElementById("subroad1").lastChild;
   g.style = "margin-left:25px;transition : none"; 
   var g =  document.getElementById("subroad1").firstElementChild;
   document.getElementById("tollroad1").appendChild(g)
   g.style = "margin-top : 530px; transform:rotate(180deg) scale(1.4)";   
   var m = document.getElementById("tollroad2").firstElementChild;   
   var k2 = document.querySelector("#subroad1");
   k2.appendChild(m);
   m.style ="margin-left : 25px";  
   m.removeEventListener("transitionend",f12)
}
