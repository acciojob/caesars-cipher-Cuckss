// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};
function rot13(str){
  var solved="";
  for(var i=0;i<str.length;i++){
    var ascii=str[i].charCodeAt();
    if(ascii>=65 && ascii<=77){
      solved+=String.fromCharCode(ascii+13);
    }else if(ascii>=78 && ascii<=90){
      solved+=String.fromCharCode(ascii-13);
    }
  }
  return solved;
}
console.log(rot13("AKSHAT"))

module.exports = rot13;
