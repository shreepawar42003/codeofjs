let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const computerscorepara = document.querySelector("#computerscore");

const gencomputerchoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randidx = Math.floor(Math.random() * 3);
  return option[randidx];
  // rock paper scissor
};

const draw = () => {
  // console.log("game was draw");
  msg.innerText = " Draw play again";
  msg.style.background = "#081b31";

};

const showwiner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    // console.log("you win");
    msg.innerText = `you win ! your ${userchoice} beats ${compchoice}`;
    msg.style.background = "green";
  } else {
    computerscore++;
    computerscorepara.innerText = computerscore;
    // console.log("you loss");
    msg.innerText = `you loss . ${compchoice} beats your ${userchoice}`;
    msg.style.background = "red";
  }
};

const playgame = (userchoice) => {
  // console.log("user choice : ", userchoice);
  const compchoice = gencomputerchoice();
  // console.log("computer choice : ", compchoice);

  if (userchoice === compchoice) {
    draw();
  } else {
    let userwin = false;
    if (
      (userchoice === "rock" && compchoice === "scissor") ||
      (userchoice === "paper" && compchoice === "rock") ||
      (userchoice === "scissor" && compchoice === "paper")
    ) {
      userwin = true;
    } else {
      userwin = false;
    }
    showwiner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("choice was cicked", userchoice);      
    playgame(userchoice);
  });
         
});
