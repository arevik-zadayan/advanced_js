function set(vec, i) {
    let bigIndex = Math.floor(i / 32)
    let smallIndex = i % 32
    vec[bigIndex] = vec[bigIndex] | (1 << smallIndex)
    console.log(vec)
}

function get(vec, i) {
    let bigIndex = Math.floor(i / 32)
    let smallIndex = i % 32
    let value = vec[bigIndex] & (1 << smallIndex)
    return value != 0
}

function buildVector(bitCount) {
    let elementCount = Math.ceil(bitCount / 32)
    let vector = new Array(elementCount)
    for (let i = 0; i < elementCount; i++) {
        vector[i] = 0
    }
    return vector
}
let vec = buildVector(124)

set(vec, 7)
set(vec, 6)
console.log(get(vec, 30))
console.log(get(vec, 7))