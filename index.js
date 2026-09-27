

function calculateTax(amount) {
    return amount * (10 / 100);
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
function isPalindrome(word) {
    let reverseWord = word.split('').reverse().join('');
    return word === reverseWord;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let finalPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    return finalPrice;
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };