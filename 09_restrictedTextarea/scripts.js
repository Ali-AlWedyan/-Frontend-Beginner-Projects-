const textarea = document.getElementById("textarea")
const counter = document.getElementById("counter")

//initail vlaue of the counter
counter.innerText = `${textarea.value.length} / 100`;

textarea.addEventListener("input", ()=>{
    counter.innerText = `${textarea.value.length} / 100`;
    if(textarea.value.length == 100){counter.style.color = "red";}
    else{counter.style.color = "black";}
})

    // doesn't consider backspace and del

// textarea.addEventListener("keypress", key =>{
//     if(count < MAXLENGTH){
//         count += 1;
//     }
//     else{
//         counter.style.color = "red";
//         return}
//     counter.innerText = `${count} / 100`;
// })


    // solves the backspace problem but NOT CONSISTANT in general

// textarea.onkeydown = function(){
//     var key = event.keyCode || event.charCode;
//     if(key == 8 || key == 46){ //backspace or delete key
//         if(count <= 0){return;}
//         count -= 1;
//     }
//     else if(count < MAXLENGTH){
//         count += 1;
//     }
//     else{
//         counter.style.color = "red";
//         return;
//     }
//     counter.style.color = "#000";
//     counter.innerText = `${count} / 100`;
// }


    // LAGS BEHIND BY 1

// textarea.onkeydown = function(){
//     if(textarea.value.length == 0){
//         counter.innerText = `0 / 100`;
//     }
//     else if(textarea.value.length == 0){
//         counter.innerText = `100 / 100`;
//     }
//     else{
//         counter.innerText = `${textarea.value.length +1} / 100`;
//     }
// }
