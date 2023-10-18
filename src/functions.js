const getSymbol = (text, index) => {
    let ans;
      if (text[index] === undefined || index > text.length) {
          ans = "";
      }else {
          ans = text[index];
      }
      return ans;
};


const removeDigit = (num) => {
      num = String(num);
      let ans = num[0] + num[num.length - 1];
      return Number(ans);

};


const isSquare = (n1 , n2) => {
    let ans = false
    if (n1 ** 2 === n2 || n1 === n2 ** 2) {
        ans = true;
    }
    return ans;
};


const numberLength = (num) => {
    num = String(num);
    return Number(num.length);
};


const flipOver = (text) => {
    return text.split('').reverse().join('');
};
export {
    getSymbol,
    removeDigit,
    isSquare,
    numberLength,
    flipOver,
}
