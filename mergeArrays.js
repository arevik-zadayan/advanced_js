//miqich vat bayc ashxatox tarberak
function sortTwoArrays(arr1, arr2) {
    let target = []
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            target.push(arr1.shift())
        } else {
            target.push(arr2.shift())
        }
    }
    return [...target, ...arr1, ...arr2]
}

function merge(arr1, arr2, arr3, arr4, arr5) {
    let arr = [...arguments]
    let newArr = []
    while (arr.length > 1) {
        let a = arr.shift()
        let b = arr.shift()
        newArr.push(sortTwoArrays(a, b))
    }
    let tempArr = sortTwoArrays(...newArr)
    newArr = []
    newArr.push(tempArr)
    return sortTwoArrays(...newArr, ...arr)
}

let arr1 = [6, 8, 10];
let arr2 = [2, 3];
let arr3 = [4, 15];
let arr4 = [600, 650];
let arr5 = [42, 79];
console.log(merge(arr1, arr2, arr3, arr4, arr5))

//google arac tarberak
// function merge(arr1,arr2,arr3,arr4,arr5,arr6) {
//     var mergedArr = [],pos = [], finished = 0;
//     for(var i=0; i<arguments.length; i++) {
//         pos[i] = 0;
//     }
//     while(finished != arguments.length) {
//         var min = null, selected;
//         for(var i=0; i<arguments.length; i++) {
//             if(pos[i] != arguments[i].length) {
//                 if(min == null || min > arguments[i][pos[i]]) {
//                     min = arguments[i][pos[i]];
//                     selected = i;
//                 }
//             }
//         }
//         mergedArr.push(arguments[selected][pos[selected]]);
//         pos[selected]++;
//         if(pos[selected] == arguments[selected].length) {
//             finished++;
//         }
//     }
//     return mergedArr;
// }
