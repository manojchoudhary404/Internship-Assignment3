// Q9: Count words in a paragraph

function countWords(paragraph) {
    const words = paragraph.trim().split(/\s+/);
    return words.length;
  }
  
  console.log(countWords("JavaScript is a versatile programming language"));  // 6
  console.log(countWords("  Hello   World  "));  // 2