const disp = document.getElementById("myH1");
let result;
let variable = '';
let op = 0,a=0,b=0,c=0;

function operation(op,a,b){
    switch (op) {
        case 0:
            return a;
            break;
        case 1:
            return a+b;
            break;
        case 2:
            return a-b;
            break;
        case 3:
            return a*b;
            break;
        case 4:
            if(b !== 0){
                return a/b;
            }
            else {return 'ERROR';}
            break;
    }
}

function prb(){
    c++;
    op === 0 ? a = Number(variable): b = Number(variable);
    c >= 2 ? result=operation(op,result,b): result=operation(op,a,b);
    variable='';
    disp.innerText = result;
    if(result === 'ERROR'){
       result = 0,op = 0;
    }
}

document.getElementById("n1").onclick = function(){
    variable += "1";
    disp.innerText = variable;
}

document.getElementById("n2").onclick = function(){
    variable += "2";
    disp.innerText = variable;
}

document.getElementById("n3").onclick = function(){
    variable += "3";
    disp.innerText = variable;
}

document.getElementById("n4").onclick = function(){
    variable += "4";
    disp.innerText = variable;
}

document.getElementById("n5").onclick = function(){
    variable += "5";
    disp.innerText = variable;
}

document.getElementById("n6").onclick = function(){
    variable += "6";
    disp.innerText = variable;
}

document.getElementById("n7").onclick = function(){
    variable += "7";
    disp.innerText = variable;
}

document.getElementById("n8").onclick = function(){
    variable += "8";
    disp.innerText = variable;
}

document.getElementById("n9").onclick = function(){
    variable += "9";
    disp.innerText = variable;
}

document.getElementById("n0").onclick = function(){
    variable += "0";
    disp.innerText = variable;
}

document.getElementById("dot").onclick = function(){
    if((variable.indexOf(".")) == -1){
        variable += ".";
    }
    disp.innerText = variable;
}

document.getElementById("eq").onclick = function(){
    if((variable !== '') && (op !== 0)){
        op === 0 ? a = Number(variable): b = Number(variable);
        c >= 2 ? result=operation(op,result,b):     result=operation(op,a,b);
        disp.innerText = result;
        if(result === 'ERROR'){
            result = 0,c=0;
        }
        variable = '';
    }
}

document.getElementById("add").onclick = function(){
    prb();
    op = 1;
}

document.getElementById("sub").onclick = function(){
    prb();
    op = 2;
}

document.getElementById("mul").onclick = function(){
    prb();
    op = 3;
}

document.getElementById("dev").onclick = function(){
    prb();
    op = 4;
}

document.getElementById("C").onclick = function(){
    variable = "",op = 0,a = 0,b = 0,c = 0,result = 0;
    disp.innerText = variable;
}

document.getElementById('del').onclick = function(){
    variable = variable.slice(0,variable.length-1);
    disp.innerText = variable;
}
