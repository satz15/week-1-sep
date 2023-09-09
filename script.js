// 1.You are given an array of numbers. Write a program that finds the largest even number
// in the array and displays the result on a web page.

// const numbers = [4, 10, 7, 15, 24, 2];
// const largestEvenNumber = findLargestEvenNumber(numbers);
// function findLargestEvenNumber(arr) {
//   let largestEven = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] > largestEven) {
//       largestEven = arr[i];
//     }
//   }

//   return largestEven;
// }

// const resultElement = document.getElementById("result");
// resultElement.textContent = "The largest even number is: " + largestEvenNumber;

// 2.You are given two numbers. Write a program that finds the sum, difference, product,
// and quotient of the two numbers and displays the results on a web page

// const num1 = 1;
// const num2 = 2;

// const sum = num1 + num2;
// const difference = num1 - num2;
// const product = num1 * num2;
// const quotient = num1 / num2;

// const resultsElement = document.getElementById("results");
// resultsElement.innerHTML = `
//             <strong>Sum:</strong> ${sum}, <br>
//             <strong>Difference:</strong> ${difference}, <br>
//             <strong>Product:</strong> ${product}, <br>
//             <strong>Quotient:</strong> ${quotient}`;

// 4.You are given an array of numbers. Write a program that finds the average of the
// numbers and displays the result on a web page.

// var numbers = [20, 30, 40, 50];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// var average = sum / numbers.length;

// var resultText = "The average is " + average.toFixed(1) + ".";
// document.write(resultText);

// 5.You are given a list of items. Write a program that randomly selects an item from the
// list and displays it on a web page.

// function selectRandomItem() {
//     var items = ["Apple", "Banana", "Orange", "Grape", "Mango"];
//     var randomIndex = Math.floor(Math.random() * items.length);
//     var selectedItem = items[randomIndex];

//     var resultElement = document.getElementById("result");
//     resultElement.textContent = 'Randomly selected item: ' + selectedItem;
// }

// 6.You are given a string. Write a program that counts the number of vowels in the string
// and displays the result on a web page

// function countVowels() {
//     var inputString = document.getElementById("inputString").value;
//     inputString = inputString.toLowerCase();
//     var vowelCount = 0;
    
//     for (var i = 0; i < inputString.length; i++) {
//         var char = inputString[i];
        
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             vowelCount++;
//         }
//     }
    
//     var resultElement = document.getElementById("result");
//     resultElement.textContent = "Number of vowels: " + vowelCount;
//  }

//  7.You are given an array of numbers. Write a program that finds the median of the
// numbers and displays the result on a web page.

// var inputNumbers = [12, 15, 17, 11, 45, 18, 17];

// function findMedian(numbers) {
//     numbers.sort(function(a, b) {
//         return a-b;
//     });

//     if (numbers.length % 2 === 1) {
//     return numbers[Math.floor(numbers.length / 2)];
//     }  else {
//         var mid1 = numbers[numbers.length / 2-1];
//         var mid2 = numbers[numbers.length / 2];
//         return(mid1 + mid2) / 2;
//     }
// }

// document.getElementById("inputNumbers").textContent = inputNumbers.join(",");
// var median = findMedian(inputNumbers);
// document.getElementById("medianResult").textContent = median;

// 10.You are given a list of items. Write a program that removes all duplicates from the list
// and displays the result on a web page

// var inputList = ["apple", "banana", "cherry", "apple", "date", "banana", "elderberry"];

// function removeDuplicates(list){
//     return list.filter((item,index,self) => self.indexOf(item) === index );
// }

// document.getElementById("inputList").textContent = inputList.join(",");
// var result = removeDuplicates(inputList);
// document.getElementById("result").textContent = result.join(",");
