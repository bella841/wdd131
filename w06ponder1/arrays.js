//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
//document.querySelector("#myList").innerHTML = stepsHtml.join(''); // set the innerHTML

const grades = ['A', 'B', 'A']

function convertGradeToNumber(grade) {
    let point = 0
    if(grade === 'A') {
        point = 4;
    }
    else if (grade === 'B') {
        point = 3;
    }
    return point;
}

const gpaPoints = grades.map(convertGradeToNumber);


console.log("gpa points: " + gpaPoints);


const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

console.log (gpa)

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

console.log(shortWords)


const numbers = [12, 34, 21, 54];
const luckyNumber = 54;
let luckyIndex = numbers.indexOf(luckyNumber);

console.log(luckyIndex)