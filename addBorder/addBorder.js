function addBorder(picture) {
    let newPicture = picture;
    let x = picture[0].length + 2;
    let y = picture.length;
    for (let i = 0; i< newPicture.length; i++) {
        newPicture[i] = "*" + newPicture[i] + "*";
    }
    newPicture.unshift(Array(x).fill("*").join(""));
    newPicture.push(Array(x).fill("*").join(""));
    return newPicture;
}

module.exports = addBorder;