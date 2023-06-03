const affirmationParagraph = document.getElementById('affirmation-paragraph');

fetch('https://peacefulriches.github.io/Affirmations.json')
  .then(response => {
    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    // Extract the JSON data from the response
    return response.json();
  })
  .then(data => {
    // Access the affirmations array from the JSON data
    const affirmations = data.affirmations;
    
    // Get a random index
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    
    // Get a random affirmation
    const randomAffirmation = affirmations[randomIndex];
    
    // Display the random affirmation
    affirmationParagraph.textContent = randomAffirmation;
  })
  .catch(error => {
    console.error(error);
  });
