// Q5: Correct wrong word in a sentence

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
  }
  
  console.log(correctfn("I luv JavaScript", "luv", "love"));
  // Output: "I love JavaScript"