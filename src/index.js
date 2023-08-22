module.exports = function check(str, bracketsConfig) {
  const stack = []; //only push & pop.
  const reverse = JSON.parse(JSON.stringify(bracketsConfig)).map((el) =>
    el.reverse()
  );
  const pairs = Object.fromEntries(reverse);

  let isWasTheSameBracket = false;

  const isClosing = (elem) => {
    const arr = [];
    for (let key in pairs) {
      arr.push(key);
    }
    return arr.includes(elem);
  };

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if (current === '|' || current === '7' || current === '8') {
      console.log('1-f');
      if (isClosing(current) && isWasTheSameBracket === true) {
        isWasTheSameBracket = false;
        console.log(`${pairs[current]} !== ${stack[stack.length - 1]}`);
        if (pairs[current] !== stack.pop()) {
          console.log(stack);
          return false;
        }
      } else {
        isWasTheSameBracket = true;
        stack.push(current);
        console.log(stack);
      }
    } else {
      console.log('2-f');
      if (isClosing(current)) {
        if (pairs[current] !== stack.pop()) return false;
      } else {
        stack.push(current);
      }
    }
  }

  console.log(`stack = ${stack}`);

  return stack.length === 0;
}

const config1 = [['(', ')']];
const config2 = [
  ['(', ')'],
  ['[', ']'],
];
const config3 = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
];
const config4 = [['|', '|']];
const config5 = [
  ['(', ')'],
  ['|', '|'],
];
const config6 = [
  ['1', '2'],
  ['3', '4'],
  ['5', '6'],
  ['7', '7'],
  ['8', '8'],
];
const config7 = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
  ['|', '|'],
];

// console.log(check('()', config1))
// console.log(check('((()))()', config1))
// console.log(check('||||', config4));
// console.log(check('111115611111111222288888822225577877778775555666677777777776622222', config6))
// console.log(check('7887', config6));
