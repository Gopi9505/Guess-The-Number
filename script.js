function startGame(){
  document.getElementById("start").style.display = "none";
  document.getElementById("box").style.display = "block";
}

const randomNum = Math.floor(Math.random() * 5) + 1;

function checkGuess() {

  if(document.getElementById('userInput').value != ""){
    const userInput = parseInt(document.getElementById('userInput').value);
    const message = document.getElementById("msg");

    // console.log("user value : "+userInput);
    // console.log("Bot  value : "+randomNum);
  
    if (userInput === randomNum) {
      message.style.color = "green";
      document.querySelector("img").src = "https://media.tenor.com/O09x7_40xeIAAAAj/dance.gif";
      document.body.style.backgroundColor = "lightgreen";
      message.textContent = "Congratulations, you guessed the correct number";
      document.getElementById("box").style.display = "none";
      document.querySelector(".container").classList.add("container2");
      document.querySelector(".btn2").style.display = "block";
    } else if (userInput < randomNum) {
      message.style.color = "red";
      message.textContent = "Too low, Try again.";
    } else {
      message.style.color = "red";
      message.textContent = "Too high, Try again.";
  }
  }else{
    alert("Please enter number!");
  }
}

function restart(){
  location.reload();
}