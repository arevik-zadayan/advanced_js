function isUnique(str) {
    const str1 = new Set(str);
    return str1.size === str.length;
}
console.log(isUnique('arev'))