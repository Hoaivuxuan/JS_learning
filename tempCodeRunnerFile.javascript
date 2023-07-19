function countCharacters(str) {
  var charCount = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  return charCount;
}

function printResultInSingleQuotesFormat(obj) {
  var singleQuotesResult =
    "{" +
    Object.entries(obj)
      .map(([key, value]) => `'${key}': ${value}`)
      .join(", ") +
    "}";
  console.log(singleQuotesResult);
}

// Example usage:
var result = countCharacters("aba");
printResultInSingleQuotesFormat(result);
