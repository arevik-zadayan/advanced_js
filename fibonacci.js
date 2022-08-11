function f(num){

    let chache = [];
    if(num===0) {
        chache[0] = 0;
        return 0;
    }
    if(num === 1){
        chache[1] = 1;
        return 1
    }
    if(num === 2 ){
        chache[2] = 1
        return 1
    }
    if(num<1) return -1;

    if(!chache[num]){
        chache[num] = f(num-1)+f(num-2);

    }
    return chache[num];
}


console.log(f(6));