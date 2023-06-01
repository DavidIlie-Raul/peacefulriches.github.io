document.addEventListener('DOMContentLoaded', function() {
    fetch('https://github.com/PeacefulRiches/PeacefulAffirmations/blob/main/Affirmations.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var affirmationsArray = data.affirmations;
        var randomIndex = Math.floor(Math.random() * affirmationsArray.length);
        var randomText = affirmationsArray[randomIndex];
        var heading = document.getElementById("affirmation");
        heading.textContent = randomText;
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  });
  