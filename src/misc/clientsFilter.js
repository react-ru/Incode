export const filterClients = (item, value) => {
  let obj = Object.values(item);

  for (let i = 0; i < obj.length; i++) {
    let newObj = Object.values(obj[i]);

    for(let k = 0; k < newObj.length; k++) {
      if (isLettersInWord(newObj[k], value)) {
        return true;
      }
    }
  }
  return false;
}

const isLettersInWord = (str, value) => {
  let newStr = str.toUpperCase();
  let newValue = value.toUpperCase();
  let result = newStr.toUpperCase().indexOf(newValue.toUpperCase());
  return result === 0 ? true : false
}