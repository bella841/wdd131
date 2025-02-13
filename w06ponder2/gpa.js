function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.querySelector(inputSelector).value;
    // split them into an array
    const gradesArray = grades.split(",");
    // clean up spaces and make uppercase
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    return cleanGrades; // Return cleaned grades
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to GPA points
    let points = 0;
    if (grade === "A") {
      points = 4;
    } else if (grade === "B") {
      points = 3;
    } else if (grade === "C") {
      points = 2;
    } else if (grade === "D") {
      points = 1;
    }
    return points;
  }
  
  function calculateGpa(grades) {
    // convert letter grades to GPA points
    const gradePoints = grades.map((grade) => lookupGrade(grade)); // Fix variable name
    // calculate the GPA
    const gpa =
      gradePoints.reduce((total, num) => total + num, 0) / gradePoints.length; // Add 0 as initial value
    return gpa.toFixed(2);
  }
  
  function outputGpa(gpa, selector) {
    // display GPA in the selected element
    document.querySelector(selector).innerText = gpa;
  }
  
  function clickHandler() {
    // get grades from input
    const grades = getGrades("#grades");
    // calculate GPA
    const gpa = calculateGpa(grades); // Fix function name
    // display GPA
    outputGpa(gpa, "#output");
  }
  
  document.querySelector("#submitButton").addEventListener("click", clickHandler);
  