const ticks = document.querySelectorAll(".tick");
const button1 = document.querySelector(".btn-1"); 
const button2 = document.querySelector(".btn-2"); 
let currTick = 0;

function updateStep() {
    ticks.forEach((tick, index) => {
        tick.classList.remove('active', 'completed');
        if (index === currTick) {
            tick.classList.add('active');
            tick.querySelector("i").innerHTML = '✔️';
        } else if (index < currTick) {
            tick.classList.add('completed');
            tick.querySelector("i").innerHTML = '✔️';
        } else {
            tick.querySelector("i").innerHTML = 'X';
        }
    });
    console.log(`Current Index: ${currTick}`); 
}

button1.addEventListener('click', () => {
    console.log('Previous button Clicked');
    if (currTick > 0) {
        currTick--;
        updateStep();
    }
});

button2.addEventListener('click', () => {
    console.log('Next button Clicked');
    if (currTick < ticks.length - 1) { // Corrected condition
        currTick++;
        updateStep();
    }
});

updateStep();
