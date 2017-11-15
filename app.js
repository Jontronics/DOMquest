/*



let cash = 0;
let totalCash = document.getElementById('totalCash');
let chanceofSuccess = Math.floor(Math.random() * 4) + 1;

let small = document.getElementById('small');
small.onclick = function (){
  if (chanceofSuccess <=3) {
    cash += Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    totalCash.innerHTML = "$"+cash;
  } else {
    cash = 0;
    totalCash.innerHTML = "You failed! \n\$"+0
  }
};

let long = document.getElementById('long');
long.onclick = function (){
  if (chanceofSuccess <= 2) {
    cash += Math.floor(Math.random() * (50 - 30 + 1)) + 30;
    totalCash.innerHTML = "$"+cash;
  } else {
    cash = 0;
    totalCash.innerHTML = "You failed! \n\$"+0;
  }
};

let boss = document.getElementById('boss');
boss.onclick = function (){
  if (chanceofSuccess == 1) {
    cash += Math.floor(Math.random() * (100 - 70 + 1)) + 70;
    totalCash.innerHTML = "$"+cash;
  } else {
    cash = 0;
    totalCash.innerHTML = "You failed! \n\$"+0;
  }
  
};  
  
  */ 
  
  
  
  // with the teacher 
  
  // How can i tell the btn has been clicked? 
  
      // add id's to each button. 
      
      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      
      
    //  let smallBtn = document.querySelector("#small");
        let smallBtn = document.getElementById("small")
         
        let cashTotal = document.querySelector("span") 
        
        let counter = 0;
        
        smallBtn.addEventListener("click", function(){
          
          // console.log("clicked") (check the code to see if it works.)
          
          // lets generate a random number
          
          let randomNum = getRandomInt(10,20);
          
          counter += randomNum; 
          
          cashTotal.textContent = counter;
          
          
        });
        
        
