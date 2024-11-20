function translateToOhWord(englishWord) {
    if (englishWord.length === 1) {
      return englishWord;
    }
  
    const firstLetter = englishWord.charAt(0);
    const restOfWord = englishWord.slice(1);
  
    return `${restOfWord}${firstLetter}ly`;
  }
  
  function translateToEnglishWord(ohWord) {
    // Check if the word ends with "ly" and has more than 3 characters
    if (ohWord.length <= 3 || !ohWord.endsWith("ly")) {
      return ohWord; // Return the word as is if it doesn't follow the "Oh Language" format
    }
  
    // Remove the "ly" suffix
    const coreWord = ohWord.slice(0, -2);
    
    // Move the last letter of coreWord to the beginning
    const lastLetter = coreWord.slice(-1);
    const restOfCore = coreWord.slice(0, -1);
  
    return `${lastLetter}${restOfCore}`;
  }
  
  function translate() {
    const inputPhrase = document.getElementById('inputPhrase').value;
    const direction = document.getElementById('direction').value;
  
    const words = inputPhrase.split(' ');
    let translatedWords;
  
    if (direction === 'toOh') {
      translatedWords = words.map(translateToOhWord);
    } else {
      translatedWords = words.map(translateToEnglishWord);
    }
  
    const translatedPhrase = translatedWords.join(' ');
    document.getElementById('translatedPhrase').innerText = translatedPhrase;
  }
  
  // Updated event listener to use 'keydown' instead of 'keypress'
  document.getElementById('inputPhrase').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      translate();
    }
  });
  