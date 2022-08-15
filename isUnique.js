function isUnique(str) {
    const array = [...str].map(s => s.codePointAt(0));
    const array1 = new Set(array);
    return array1.size === array.length;
}
console.log(isUnique('arev💇🏿‍👧🧚'))