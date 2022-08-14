function reverse(str) {
    const arr = []
    for( let i of str){
        arr.push(i)
    }
    return arr.reverse().join('')
};
console.log(reverse('arev😊'));