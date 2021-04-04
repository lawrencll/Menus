var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
    content:""
  },
  {
    name:"About",
    content:"Caleb Lawrence"
  },
  {
    name:"Interact",
    content:"none"
  
  },
]


for( var i = 0; i<pages.length; i++){
  
  createPage(pages[i]);
  
}

function createPage(pg){
  var button = document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name)
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}
function contentWrite(wd,pg){
  var header = document.createElement("h1");
  var h3 = document.createElement("h3");
  display.innerHTML="";
  if(pg!=="Interact"){
    header.innerHTML=pg;
    h3.innerHTML=wd;
    display.appendChild(header);
    display.appendChild(h3);
  }
  
  else {
    
    interactPage(pg.name)
    
  }
  
}





function interactPage(pg){ 
  var count=0;
  var header = document.createElement("h1");
  var counter = document.createElement("h3");
  var increase= document.createElement("button");
  header.innerHTML="Interact";
  increase.innerHTML="Increase Number";
  counter.innerHTML=count;
  display.appendChild(header);
  display.appendChild(increase);
  display.appendChild(counter);
  
  
  
  document.body.querySelector(".counter").innerHTML=count;
  
  document.body.querySelector(".increase").addEventListener("click", function(){
    count=count+1;
    document.body.querySelector(".counter").innerHTML=count;
  })
  
}

contentWrite(pages[0].content, "Home");