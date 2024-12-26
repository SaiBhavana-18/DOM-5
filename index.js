let keys=document.querySelectorAll("#keyboard>div");
//let btn=document.querySelector("click",leaderboard())

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", leaderboard);

  }
let bag = ""
let num1=document.querySelector("min").value
let num2=document.querySelector("max").value

function leaderboard(){
    let targetNumber = event.target.innerText; 
    if (targetNumber == "ENTER") {
        
        document.querySelector("#display").innerText = eval(bag);

        bag = "";
        document.querySelector("#display").innerText = bag;
      } else if (eval(bag)<num1) {
        document.querySelector("#min").innerText = eval(bag);
        // evaluate the string and return single calculated value.
      } else if (eval(bag)>num2){
        document.querySelector("#max").innerText = eval(bag);
      }

}