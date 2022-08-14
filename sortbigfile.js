const fs = require('fs');
//read file line by line
let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('numbers.txt')
});
let writeStream = fs.createWriteStream('sort.txt', {encoding: 'utf-8'});

function buildVector(bitCount) {
    let elementCount = Math.ceil(bitCount / 32)
    let vector = new Uint32Array(elementCount)
    for (let i = 0; i < elementCount; i++) {
        vector[i] = 0
    }
    return vector
}

let vec = buildVector(2000000);

function set(vec, i) {
    let bigIndex = Math.floor(i / 32)
    let smallIndex = i % 32
    vec[bigIndex] = vec[bigIndex] | (1 << smallIndex)
}

function encode(vec) {
    for (let i = 0; i < vec.length; i++) {
        if (vec[i] !== 0) {
            let bin = vec[i].toString(2)
            for (let j = bin.length - 1; j >= 0; j--) {
                if (bin[j] === '1') {
                    writeStream.write(`${bin.length - 1 - j + i * 32}\n`, 'utf-8');
                }
            }
        }
    }
}

lineReader.on('line', function (line) {
    set(vec, line)
});
lineReader.on('close', function () {
    encode(vec)
});
