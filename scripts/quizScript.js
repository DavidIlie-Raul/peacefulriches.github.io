let answers = [];

let radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('click', (event) => {
    answers.push(event.target.classList[0]);
    console.log(answers); // Check the answers array
  });
});

let submitButton = document.getElementById('prosperity-test-submit-button');
console.log(submitButton); // Check that submitButton is not null
submitButton.addEventListener('click', calculateScore);


function calculateScore() {
    let xCount = 0;
    let yCount = 0;
    let zCount = 0;

    answers.forEach((answer) => {
      if (answer === 'X') {
        xCount += 0;
      } else if (answer === 'Y') {
        yCount += 5;
      } else if (answer === 'Z') {
        zCount += 10;
      }
    });
  
    let finalScore = xCount + yCount + zCount;
    sessionStorage.setItem('finalScore', finalScore);
  
    console.log(finalScore); // Check the final score in the console
}




  
  
  
  

  
  
  