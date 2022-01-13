const { arrayify } = require("ethers/lib/utils");

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// gives correct answer but not a function
// const titleCased = tutorials.map((text) => text.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))))

// const titleCased = () => {

// let text = 'veni vidi vici';
      
// function capitalizeWord(string) {
//   newString= '';
//   for (let i = 0; i < string.length; i++) {
//     if (i===0){
//       newString+=string[i].toUpperCase();
//     } else {
//       newString+=string[i];
//     }  
//   }
//   return newString;
// }

// function sentCapper(sent){
//   const words = sent.split(' ');
//   const upperWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
//   return upperWords.join(' ');
// }


// function capitalizeSentence(sent) {
//   words = sent.split(' ');
//   newSent = ''
//   for (let i = 0; i < words.length; i++) {
//     if (i===0){
//       newSent+=capitalizeWord(words[i]);
//     } else {
//       newSent+= ' ' + capitalizeWord(words[i]);
//       }
//   }
//   return newSent;
// }

// function capitalizeArray(aray) {
//   let newAray = []
//   for (let i = 0; i < aray.length; i++) {
//     newAray.push(capitalizeSentence(aray[i]));
//   }
//   return newAray;
// }

// function titleBased(aray) {
//   return aray.map(capitalizeSentence)
// }

// const titleCased = () => {
//   return tutorials.map((line) => {
//     const tokens = line.split(" ");
//     const capitalizedTokens = tokens.map(
//       (token) => token.charAt(0).toUpperCase() + token.slice(1)
//     );
//     const response = capitalizedTokens.join(" ");
//     return response;
//   });
// };


// 1. Iterate through each sentence found in the tutorials array 
// 2. Split the sentence into an array of multiple words 
// 3. Iterate through each word found in the array we just made 
// 4. capitalize each word by 
// 5. getting the first character of the word and capitalizing it 
// 6. adding that new capitalized character infront of the remainder of the word 
// 7. combine the newly capitalized words back into a sentence 
// 8. add the capitalized sentence into an array together
// 9. return the new array of capitalized sentences


// const titleCased = () => {
//   return tutorials.map(
//     (sentence) => { // iterate through each sentence found in tutorials
//     const words = sentence.split(" "); // splits the sentence into words
//     const capitalizedWords = words.map( // iterate each word of words
//       (word) => word.charAt(0).toUpperCase() + word.slice(1) // word.charAt(0) gives you the first character of word
//     );
//     const capitalizedSentence = capitalizedWords.join(" "); // combine the capitalized words into a sentence
//     return capitalizedSentence; // returns the new sentence
//   });
// };

const titleCased = () => {
  return tutorials.map(tutorial => {
    const res = tutorial.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    console.log(res);
    return res;
  });};
titleCased();