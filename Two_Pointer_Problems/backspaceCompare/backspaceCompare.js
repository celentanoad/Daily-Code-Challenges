// Given two strings, s and t, return true if they are equal when both are typed into empty text editors.  '#' indicates a backspace character


// function backspaceCompare(s, t) {
//   let string1 = [];
//   let string2 = [];
//   for (let i = 0; i<s.length; i++) {
//     if (s[i] !== '#') string1.push(s[i]);
//     else string1.pop();
//   }
//   for (let i=0; i<t.length; i++) {
//     if (t[i] !== '#') string2.push(t[i]);
//     else string2.pop();
//   }
//   return string1.join('') === string2.join('');
// }

// Two pointer approach:

function backspaceCompare(s, t) {
  let i = s.length-1;
  let j = t.length-1;

  numberOfSkipsS = 0;
  numberofSkipsT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === "#") {
        numberOfSkipsS++;
        i--;
      } else if (numberOfSkipsS > 0) {
        numberOfSkipsS--;
        i--;
      } else {
        break;
      }
    }
    while (j >= 0) {
      if (t[j] === "#") {
        numberofSkipsT++;
        j--;
      } else if (numberofSkipsT > 0) {
        numberofSkipsT--;
        j--;
      } else {
        break;
      }
    }
    if (s[i] !== t[j]) return false;
    if ((i>=0) !== (j>=0)) return false;
    j--;
    i--;
  }
  return true;
}

module.exports = backspaceCompare;