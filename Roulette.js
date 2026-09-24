const prompt = require("readline-sync")
let Response = ["You Lost", "You Live", "You Live", "You Live", "You Live", "You Live"];
let roll = Math.floor(Math.random() * 6);
let Phase = 1;
let End = 1;

function ender(a){
    if(a === "You Lost"){
        End = 0;  
    }else{        
        Response[Response.indexOf("You Live")] = "You Lost";
    }      
}

console.log("\n==============================")
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
            console.log(Response[0] + " (0)")
            ender(Response[0]);
            break;
        case 1:
            console.log(Response[1] + " (1)")
            ender(Response[1]);
            break;
        case 2:
            console.log(Response[2] + " (2)")
            ender(Response[2]);
            break;
        case 3:
            console.log(Response[3] + " (3)")
            ender(Response[3]);
            break;
        case 4:
            console.log(Response[4] + " (4)")
            ender(Response[4]);
            break;
        case 5:
            console.log(Response[5] + " (5)")
            ender(Response[5]);
            break;
    }
    Phase = Phase + 1
    let Out = Response.join(" ");
    console.log("-------------------------")
    console.log(Out);
    console.log("\n==============================")
}
