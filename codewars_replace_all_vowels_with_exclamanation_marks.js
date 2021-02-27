/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

const replace = (s) => {
  const vowels = {
    a : true,
    e : true,
    i : true,
    o : true,
    u : true
  }
  let str = '';
  for(let i = 0; i < s.length; i++) {
    if(vowels[s[i].toLowerCase()] === true) {
      str += '!';
    } else {
      str += s[i];
    }
  }

  return str;
}