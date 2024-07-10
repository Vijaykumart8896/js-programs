console.log("Welcome to the Js-programs");

document.addEventListener("visibilitychange", () => {
  document.hidden
    ? (document.title = "Please dont go💔")
    : (document.title = "JS programs");
});

// ========== how to add time in web pages ===============
let time = document.getElementById("time");
console.log(time);

function getTime() {
  setInterval(() => {
    let currentTime = new Date(); // Get the current time
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    time.innerHTML = `Time ${hours}:${minutes}:${seconds}`;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", getTime);

// ================= Reverse a String ==========================
// 1st way
function reverseString(text) {
  let revStr = "";
  for (let i of text) {
    revStr = i + revStr;
  }
  return revStr;
}
// 2nd way
let str = "manasa";
// console.log(str.split("").reverse().join(""));
// console.log(reverseString("vijay"));

// ===================== polindrome or not ===============

function polindrome(word) {
  let temp = "";
  for (let i of word) {
    temp = i + temp;
  }
  return temp == word ? true : false;
}
// console.log(polindrome("cac"));

// ============Largest Number in array ==============
function largetNumber(arr) {
  let largest = arr[0];

  arr.forEach((num) => {
    if (num > largest) {
      largest = num;
    }
  });
  return largest;
}
// console.log(largetNumber([2, 4, 6, 7, 7, 9, 22]));

// =========== Logest word in sensenseces ==========

function getlargestWord(sentense) {
  let word = sentense.split(" ");
  let longestSentence = "";
  word.forEach((word) => {
    if (word.length > longestSentence.length) {
      longestSentence = word;
    }
  });
  return longestSentence;
}

// console.log(getlargestWord("hello vijjay how are you"));

// ==================== revese the array using map =========

function reverseArray(arr) {
  let lastIndex = arr.length - 1;
  let result = arr.map((value, index, arr) => {
    return arr[lastIndex - index];
  });
  return result;
}

// console.log(reverseArray([1, 3, 5, 6]));




