// function reverse(str) {
//     const arr = [...str]
//     for( let i of str){
//         arr.push(i)
//     }
//     console.log([...str].length)
//     console.log(arr.length)
//     return arr.reverse().join('')
// };
function reverse(str) {
    let arr = [...str];
    let newStr = "";

    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        while (arr[i + 1] === '\u200d') {
            char += arr[i + 1] + arr[i + 2];
            i = i + 2;
        }
        newStr = char + newStr;
    }
    return newStr;
}

console.log(reverse('arev💇🏿‍👧🧚'))