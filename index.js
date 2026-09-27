function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return Math.max(num1, num2)
}

functions isPalindrome(word) {
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned=== reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice * (1 - discountPercentage/100);
}

module.exports = { 
    calculateTax, 
    convertToUpperCase, 
    findMaximum, 
    isPalindrome, 
    calculateDiscountedPrice 
};






