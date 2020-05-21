function judgeCircle(moves) {
  let x = 0;
  let y = 0;
    for (let i = 0; i< moves.length; i++) {
        if (moves[i] === "U") {
            y += 1
            console.log(`up: ${location.U}`)
        } else if (moves[i] === "D") {
            y += -1
            console.log(`down: ${location.D}`)
        } else if (moves[i] === "R") {
            x += 1
            console.log(`right: ${location.R}`)
        } else {
            x += -1
            console.log(`left: ${location.L}`)
        }
    }
    return (y === 0 && x === 0);

}

judgeCircle("LDRRLRUULR");