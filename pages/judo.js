let g_cnt = 0;
let w_cnt = 0;
function showGend(){
    console.log("dsd");
    document.getElementById("gender").style.display = "block";
}
function showWeight(){
    document.getElementById("weight").style.display = "block";
}
function showFE(){
    document.getElementById("G").innerText = "Female";
    document.getElementById("gender").style.display = "none";
}
function showMA(){
    document.getElementById("G").innerText = "Male";
    document.getElementById("gender").style.display = "none";
}
function dispWeight( w ){
    if( w == 100 )
        document.getElementById("W").innerText = "+100";
    else
        document.getElementById("W").innerText = w;
    let table = document.getElementsByTagName("table");
    for(let i = 0; i < table.length; i ++ ){
        table[i].style.display = "none";
    }
    document.getElementById(w).style.display = "block";
    document.getElementById("weight").style.display = "none";
}