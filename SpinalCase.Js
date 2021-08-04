function spinalCase(str) {
  return str.replace(/_/g,'').replace(/([A-Z])/g," $1").replace(/^\s/,"").replace(/\s+/g,'-').toLowerCase();
}

console.log(spinalCase('The_Andy_Griffit'));

function spinalCase(str) {
   function replacer(match){
     return ' ' + match;
   }
   if (str[0] <= 'z'&& str[0] >= 'a'){
     str =str.replace(/[A-Z]+/g,replacer);
   }
   str = str.replace(/\s/g,'-').replace(/_/g,'-').toLowerCase();
   return str;
 }
 console.log(spinalCase('This Is Spinal Tap'));