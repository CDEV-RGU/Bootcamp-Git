const prompt = require("readline-sync")
const Response = ["You Lost", "You Live", "You Live", "You Live", "You Lost"];
let roll = Math.floor(Math.random() * 6);
let Phase = 1
let End = 1

while(Phase > 5 || End == 1){
    let ANS = prompt.question("Will you continue?: ")
    if(ANS === "no" || ANS === "n" || ANS === "nah"){
        End = 0;
        break;
    }
    console.log("Reloading! \n. \n..\n...");
    roll = Math.floor(Math.random() * 6);
    switch(roll){
        default:
            console.log("Reloading! \n. \n..\n...");
        case 0:
            console.log(Response[2] + " (0)")
            break;
        case 1:
            console.log(Response[2] + " (1)")
            break;
        case 2:
            console.log(Response[3] + " (2)")
            break;
        case 3:
            console.log(Response[1] + " (3)")
            break;
        case 4:
            console.log(Response[4] + " (4)")
             End = 0
            break;
        case 5:
            console.log(Response[0] + " (5)")
             End = 0
            break;
    }
    Phase = Phase + 1
}
