/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = '';
  let newstrs = strs.map(str => str.split('').sort().join(''));
  let firststrs = strs[0];

  for (let k = 0; k < firststrs.length; k++) {
    if (strs.every(word => word[k] === firststrs[k])) {
      result += firststrs[k];
    } else {
      break;
    }
  }

  return result;
};


// 각각의 배열안의 요소들을 분리후 확인 
//배열안에 3개다 중복값이 있으면 문자열에 담아 리턴