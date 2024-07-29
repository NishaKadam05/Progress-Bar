const ticks=document.querySelectorAll(".tick");
const buttons=document.querySelectorAll(".col-12");
let currTick=0;

function updateStep(){
    ticks.forEach((tick,index)=>{
        tick.classList.remove('active','completed');
        if(index==currTick){
            tick.classList.add('active');
            tick.querySelector('i').textContent='✔️'
        }
        else if(index<currTick){
            tick.classList.add('completed');
            tick.querySelector('i').textContent='✔️';
        }
        else{
            tick.querySelector('i').textContent='X';
        }
    });
}

buttons.forEach((btn1,index)=>{
    btn1.addEventListener('click',()=>{
        if(index==0){
            if(currTick>0){
                currTick--;
            }
        }
        else{
            if(currTick<ticks.length-1){
                currTick++;
            }
        }
        updateStep();
    })
});