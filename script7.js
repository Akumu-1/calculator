const disp = document.getElementById("myH1");
let result;
let variable = '';
let op = 0;

function operation(op,a,b){
    switch (op) {
        case 0:
            return a;
        case 1:
            return a+b;
        case 2:
            return a-b;
        case 3:
            return a*b;
        case 4:
            if(b !== 0){
                return a/b;
            }
            else {return 'ERROR';}
    }
}

function prb() {
    if (variable !== '') {
        const num = Number(variable);
        if (op === 0) {
            result = num;
        } else {
            result = operation(op, result, num);
        }

        if (result === 'ERROR') {
            resetAll();
            disp.innerText = 'ERROR';
        } else {
            disp.innerText = result;
        }

        variable = '';
    }
}

function resetAll() {
    variable = '';
    op = 0;
    result = 0;
}

for (let i = 0; i <= 9; i++) {
    document.getElementById("n" + i).onclick = function () {
        variable += i;
        disp.innerText = variable;
    }
}

document.getElementById("dot").onclick = function(){
    if((variable.indexOf(".")) === -1){
        variable += ".";
    }
    disp.innerText = variable;
}

document.getElementById("eq").onclick = function(){
    prb();
    op = 0;
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
