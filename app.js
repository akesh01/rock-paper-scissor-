const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    const startGame =()=> {
      const palyBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");

      palyBtn.addEventListener('click',()=>{
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //play match
    const playMatch = ()=>{
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll('.hands img');
      hands.forEach(hand =>{
        hand.addEventListener('animationend',function(){
          this.style.animation = "";
        })
      })
            //computer options 
      const computeroptions = ['rock','paper','scissors'];

      options.forEach(option=>{
        option.addEventListener('click',function(){
          //computer choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computeroptions[computerNumber];
          // call compare Hands
          setTimeout(()=>{
 
            compareHands(this.textContent,computerChoice);
            playerHand.src = `./assets/${this.textContent}.png` ;
            computerHand.src = `./assets/${computerChoice}.png`;
          },2000);
          //update images


          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";

        });
      });
    };

    const updateScore = ()=> {
      const playerscore = document.querySelector('.player-score p');
      const computerscore = document.querySelector('.computer-score p');
      playerscore.textContent = pScore;
      computerscore.textContent = cScore;
    }


  const compareHands = (playerChoice,computerChoice)=> {
    //update text
    const winner = document.querySelector(".winner");
    //checking for a tie
           if(playerChoice == computerChoice) {
              winner.textContent = "it is a tie";
              return ;
           }
           //check for rock
           if(playerChoice === 'rock') {
             if(computerChoice === 'scissors') {
               winner.textContent = 'Player wins' ;
               pScore++;
               updateScore();
               return ;
             }else {
               winner.textContent = 'Computer wins';
               cScore++;
               updateScore();
               return ;
             }
           }

           //check for paper
           if(playerChoice === 'paper') {
            if(computerChoice === 'scissors') {
              winner.textContent = 'Computer wins' ;
              cScore++;
              updateScore();
              return ;
            }else {
              winner.textContent = 'Player wins';
              pScore++;
              updateScore()
              return ;
            }
          }
          //Check scissors
          if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
              winner.textContent = 'Computer wins' ;
              cScore++;
              updateScore();
              return ;
            }else {
              winner.textContent = 'Player wins';
              pScore++;
              updateScore();
              return ;
            }
          }


  }

    //call all inner functions
    startGame();
    playMatch();
;}

game();