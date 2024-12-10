// 1
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

// 1

// 2
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');

  const totalPrice = words.length * pricePerWord;

  return totalPrice;
}

// 2

// 3
function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));
  console.log(findLongestWord('JavaScript is awesome'));
// 3

// 4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  
  return string.slice(0, 40) + '...';
}
// 4

// 5
function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
  }

  console.log(checkForSpam('Get the best SALE now!'));
  console.log(checkForSpam('Important SPAM notification'));
  console.log(checkForSpam('Hello, how are you?'));
// 5  

// 6

// 6

// 7
function addLogin(logins, login) {
    const minLenght = 4;
    const maxLenght = 16;
  
    if (login.length < minLenght || login.length > maxLenght) {
      return 'Error! Login must be between 4 and 16 characters';
    }
  
    if (logins.includes(login)) {
      return 'Error! Login already exists';
    }
  
    logins.push(login);
    return 'Login successfully added';
  }

  const logins = ['user123', 'admin', 'guest'];
  
  console.log(addLogin(logins, 'newUser'));
  console.log(addLogin(logins, 'us'));
  console.log(addLogin(logins, 'admin'));
  console.log(logins);
// 7