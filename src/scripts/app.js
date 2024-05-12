// Task 1. Ədədlərdən ibarət bir array qəbul edən və bu ədədlərin ədədi ortasını tapan bir funksiya yazın
let nums = [1, 5, 12, 10, 20, 30, 12];
const findNumericalAverage = (arr) => {
    let sum = 0;
    let result = 0;
    for (let n of arr) {
        sum += n
    };

    result = Math.floor(sum / arr.length);
    return result;
};
let numsResult = findNumericalAverage(nums);
console.log(numsResult)

// Task 2. String qəbul edən və onu tərsinə yazan funksiya yazın, məsələn "salam" qəbul edir "malas" qaytarır
const reverse = (str) => {
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    };
};
reverse("Tohid");

// Task 3.  Ədədin faktorialını hesablayan funksiya yazın
const calcFactorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * calcFactorial(n - 1); // rekursive function
    }
};
let result = calcFactorial(10);
console.log(result);


// Task 4. Sözlərdən ibarət array qəbul edən və bu sözlərdən uzununu tapan funksiya yazın, 
let arr = ["apple", "orange", "strawberry", "ananasBanan", "OrangeAppleMelon",];
let max = arr[0]

const searchLargestWord = (arr) => {
    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        };
    };
    console.log(max);
};
searchLargestWord(arr);

// Task 5. Verilən ədədin rəqəmləri cəmini hesablayan funksiya yazın
const calcSum = (x, y) => {
    let sum = x + y;
    return sum;
}
let sum = calcSum(5, 10)
console.log(sum)