const transpose = function (matrix) {
    // Put your solution here
    let newArray = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let col = [];

        for (let j = 0; j < matrix.length; j++) {
            col.push(matrix[j][i]);
            //console.log("Column", col);
        }
        newArray.push(col);
        // console.log("newArray", newArray)
    }
    return newArray;

};

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const vertArray = transpose(letters).map(x => x.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (v of vertArray) {
        if (v.includes(word)) return true
    }
    return false;
}


module.exports = wordSearch