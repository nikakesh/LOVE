const number = document.querySelector(".percent");
const bt = document.querySelector(".bt1");
const input0 = document.getElementById("inp1");
const input1 = document.getElementById("inp2");
let names = [];
bt.addEventListener("click", ()=>{
    if(names.length === 0) {
        calculate();
        return 0;
    }
    for(i = 1; i < names.length; i++){
        if(input0.value === names[i]||input1.value === names[i]){
            number.innerHTML = "one of the names were already used";
        }
        else{
            calculate();
            break;
    }
    }
})
function calculate(){
    names.push(input0.value, input1.value);
    number.innerHTML = Math.floor(Math.random()*100)+"%";
}