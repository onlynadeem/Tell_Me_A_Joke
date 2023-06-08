// Creating a Jokes DataSet.
let jokes_arr = [`What do Adidas running shoes do when they forget something? They jog their memory.`,
  `What shoes do secret agents wear? Adidas Sneakers.`,
  `I am so cool that whenever i take my selfie friends call it Kulfi!`,
  `Boy: I am in love with you, totally…, Girl: Tu Totla! Tela Baap Totla!`,
  `Shortest Murder Story: Wife: Sunte Ho… Husband: Nahi!`,
  `Teacher: NADA ko english mey kya kehte hai…???, Student: P.H.D., Teacher : Kya….???, Student : Pyjaama Holding Device..`,
  `What did the chewing gum say to the adidas sneaker? I'm stuck on you!`,
  `How do jocks spike the punch? With their Adidas cleats.`,
  `Did you hear about the new Derrick Rose Adidas sneaker? It's actually more of a flip-flop.`,
  `Dost sharab pite pite rone laga… Another Friend: Kya hua ro Qyu rahe ho? Dost : Yaar jis ladki ko bhulane ke liye pee raha tha uska naam yaad nahi aa raha...`,
  `Govinda Ne Ghar Ke Uper Wale Hisse Mein Paint Kiya Aur Neeche Wale Hisse Mein Likh Diya . . . . 'Same As Above'`,
  `Do you have a hole in your Adidas sneakers? No. Then how did your foot get in.`,
  `Que: Should I have a baby after 35?
     Ans: No, 35 children is enough.,`,
  `Que: I'm two months pregnant now. When will my baby move? 
     Ans: With any luck, right after he finishes college.`,
  `Que: What is the most common pregnancy craving? 
     Ans: For men to be the ones who get pregnant.`,
  `Que: What is the most reliable method to determine a baby's sex? 
     Ans: Childbirth.`,
  `Que: The more pregnant I get, the more often strangers smile at me. Why? 
     Ans: 'Cause you're fatter than they are.`,
  `Que: My wife is five months pregnant and so moody that sometimes she's borderline irrational.
     Ans: So what's your question?`,
  `Que: My childbirth instructor says it's not pain I'll feel during  labor, but in pressure. Is she right? 
     Ans: Yes, in the same way that a tornado might be called an air current.`,
  `Que: When is the best time to get an epidural? 
     Ans: Right after you find out you're pregnant.`,
  `Que: Is there any reason I have to be in the delivery room while my wife is in labor? 
     Ans: Not unless the word "alimony" means anything to you.`,
  `Que: Is there anything I should avoid while recovering from childbirth? 
     Ans: Yes, pregnancy.`,
  `Que: Do I have to have a baby shower? 
     Ans: Not if you change the baby's diaper very quickly.`,
  `Que: Our baby was born last week. When will my wife begin to feel and act normal again? 
     Ans: When the kids are in college`,];

//Generating a Random Number with respect to the Dataset array length.
let generate_random = (min, max) => {
  let diffrence = (max + 1) - min;
  let rand = Math.random();
  rand = Math.floor(rand * diffrence);
  rand = rand + min;
  return rand;
}
let i = generate_random((0), (jokes_arr.length - 1));


// document.getElementById("Joke_box").addEventListener("click", () => {
//     let rand = Math.floor(Math.random() * jokes.length);
//     document.getElementById("joke").innerHTML = `<q> ${jokes[rand]} </q>`;
// });

document.getElementById("Joke_box").innerHTML = jokes_arr[i]

// let n = 1
//     while (n = 1) {
//         document.getElementById("Joke_box").innerHTML = jokes_arr[i];
//         break;
//     }

let toggle_joke = () => {
  let joke = document.getElementById("Joke_box");
  joke.innerHTML = jokes_arr[i++];
}

setInterval(() => {
  i = 0
}, 6000);