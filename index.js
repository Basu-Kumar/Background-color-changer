var txt=document.getElementById("text");

function changeBG(color){
    document.body.style.backgroundColor=color;
    if(color=="#000000"){
        txt.style.color="white";
    }else{
        txt.style.color="black";
    }
}
