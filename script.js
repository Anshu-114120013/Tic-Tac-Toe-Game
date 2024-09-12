
let ting=new Audio("sounds/ting.mp3");
let bgSound=new Audio("sounds/music.mp3");
let gameOverSound=new Audio("sounds/gameover.mp3");
let turn="X";
let isgameover=false;

const changeTurn=()=>{
    return turn==="X"?"0":"X";
}

const checkWin=()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    let wins=[
        [0,1,2,2.5,5,0],
        [3,4,5,2.5,15,0],
        [6,7,8,2.5,25,0],
        [0,3,6,-7.5,15,90],
        [1,4,7,2.5,15,90],
        [2,5,8,12.7,15,90],
        [0,4,8,2,15,45],
        [2,4,6,2,15,-45],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[1]].innerText!=="")){
            document.querySelector(".info").innerText =`${boxtext[e[0]].innerText} won`;
            isgameover=true;
            document.querySelector("img").style.width="20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width="25vw"
            if(isgameover===true) gameOverSound.play();
        }
    })
}
//bgSound.play();
let boxes=document.querySelectorAll(".box");
for(let element of boxes){
// Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            ting.play();
            turn=changeTurn();
            checkWin();
            if(!isgameover){document.querySelector(".info").innerText=`Turn for ${turn}`;}
        }
    })
}

let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    for(element of boxtext){
        element.innerText="";
    }
    turn="X";
    isgameover=false;
    document.querySelector(".info").innerText=`Turn for X`;
    document.querySelector("img").style.width="0";
    document.querySelector(".line").style.width="0";
})