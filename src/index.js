// module.exports =
function check(str, bracketsConfig) {
  const stack = []; //only push & pop.
  const reverse = JSON.parse(JSON.stringify(bracketsConfig)).map((el) =>
    el.reverse()
  );
  const pairs = Object.fromEntries(reverse);

  // console.log(str);
  // console.log(bracketsConfig);
  console.log(pairs);

  const isClosing = (elem) => {
    const arr = [];
    for (let key in pairs) {
      arr.push(key);
    }
    // console.log(arr);
    return arr.includes(elem);
  };

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if (isClosing(current)) {
      if (pairs[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
}
//TODO: для того чтоб узнать какой скобкой должен заканчиваться элемент из стака, нужно сравнить элемент стака с первым значением элементов из конфига, и когда совпадение найдено. ТО мы будем знать, чему равен 2й

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
console.log(check('||', config4));
