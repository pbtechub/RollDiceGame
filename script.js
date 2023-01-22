const rollBtn = document.querySelectorAll('.btn');
const rollDiceBtn = document.getElementById('roll-btn');
const resetDiceBtn = document.getElementById('reset-btn');
const startDiceBtn = document.getElementById('start-btn');
const timer = document.querySelector('.counter')
const model = document.querySelector('.model')

rollDiceBtn.addEventListener('click', rollDice)
resetDiceBtn.addEventListener('click', resetDice)
startDiceBtn.addEventListener('click', startDice)
let counter = 30;
let isPlaying = true

document.addEventListener('DOMContentLoaded', ()=> {
isPlaying = false


})

// Start game

function startDice() {
    counter = 30
    isPlaying = true
    const myInterval = setInterval(gameTime, 1000)

    function gameTime() {
        if(counter > 0) {
            counter--
            
        } else if(counter <= 0){
            
            rollDiceBtn.setAttribute("disabled", 'true')
            rollBtn.forEach((btn) => {
                btn.setAttribute("disabled", 'true')
               
            })
            clearInterval(myInterval)
            model.style.opacity = '1';
            
        }
    
    timer.innerHTML = counter
    
}

gameTime()
rollDiceBtn.removeAttribute("disabled")
rollBtn.forEach((btn) => {
    btn.removeAttribute("disabled")
    btn.classList.remove('ishold')
})
model.style.opacity = '0';
  
}

startDice()


// Roll Dice
    
function rollDice() {
    
    rollBtn.forEach((btn) => { 
     const randNo = Math.ceil(Math.random() * 6);
     
 
     if(btn.classList.contains('ishold')) {
         
     } else {
         btn.innerHTML = randNo
     }

    }) 
    
             
 }
 rollDice()

 
//  Hold Dice

function holdDice() {
    rollBtn.forEach((btn) => {
        btn.addEventListener('click', ()=> {
            btn.classList.toggle('ishold')
 
        })
    })
}

holdDice()


// Reset Dice

function resetDice() {
   
   rollBtn.forEach((btn) => {
    btn.innerHTML = '#'
    btn.classList.remove('ishold')
    btn.removeAttribute("disabled")
    
   })

   rollDiceBtn.removeAttribute("disabled")
   counter = 30
   timer.innerHTML = counter
  model.style.opacity = '0';
   
   
}

resetDice()




