// Implement the logic to have each letter delay its appearance by 50ms (or so) longer than the previous letter.
const sentence = "hello there from lighthouse labs\n";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
//to console the sentense in one line because console.log will break a character into every line  
  process.stdout.write(sentence[i]);
//have 50 ms delay every iteration
}, 50 * i);
};
