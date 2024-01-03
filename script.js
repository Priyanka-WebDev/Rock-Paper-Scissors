let userscore = 0;
let compscore = 0;

const userscorepara = document.querySelector('#user-score');
const compscorepara = document.querySelector('#comp-score');

const choices = document.querySelectorAll('.choise');
const msg = document.querySelector('#msg');
const genCompChoice = ()=>{
    const options  =['rock','paper','scissors'];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
} 

const drowgame = ()=>{
    // console.log("game was draw");
    msg.innerText = `game was draw. play again`;
    msg.style.backgroundColor = '#081b31'
}
const showwinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        // console.log('you win');
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = 'green'
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        // console.log('you loose');
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor='red'
    }
}
const playgame = (userchoice)=>{
// console.log('user choice = ',userchoice);
const compchoice = genCompChoice();
// console.log('comp choice = ',compchoice);

if(userchoice === compchoice){
    drowgame();
}else{
    let userwin = true;
    if(userchoice === 'rock'){
        userwin = compchoice === 'paper' ? false : true;
    }
    else if(userchoice === 'paper'){
        userwin = compchoice === 'scissors' ? false : true;
    }else{
        userwin = compchoice === 'rock' ? false :true; 
    }
    showwinner(userwin,userchoice,compchoice);
}

};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener('click',()=>{
        const userchoice = choice.getAttribute('id')
        // console.log("choise was clicked",userchoice);
        playgame(userchoice)
    })
}) 
