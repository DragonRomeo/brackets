module.exports = function check(str, bracketsConfig) {
  const stack = []; //only push & pop.
  const reverse = bracketsConfig.map((el) => el.reverse());
  const pairs = Object.fromEntries(reverse);
  // console.log(pairs);
  console.log(str);
  console.log(bracketsConfig);

  const isClosing = (elem) => {
    const arr = [];
    for (let item in pairs) {
      arr.push(item);
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

// const value1 = check('()', [['(', ')']]); // -> true
// const value2 = check('((()))()', [['(', ')']]); // -> true
// const value3 = check('())(', [['(', ')']]); // -> false
// const value4 = check('([{}])', [
//   ['(', ')'],
//   ['[', ']'],
//   ['{', '}'],
// ]); // -> true

// const config1 = [['(', ')']];
// const test2 = check('((()))()', config1);
// console.log(test2);

// const config2 = [['(', ')'], ['[', ']']];
// const test6 = check('[]()', config2);
// console.log(test6);

// const var1= [ [ ')', '(' ] ];
// const testMain = check('())(', var1);
// console.log(testMain);


// console.log(value1);
// console.log(value2)
// console.log(value3)
// console.log(value4)
