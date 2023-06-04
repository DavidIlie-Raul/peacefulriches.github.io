

document.addEventListener("DOMContentLoaded", function() {
    const errorEmailMessage = document.getElementById("modal-email-error-errormessage");
    const duplicateEmailMessage = document.getElementById("modal-email-duplicate-errormessage");
    const fakeEmailMessage = document.getElementById("modal-email-fake-errormessage");

    document.getElementById("modal-newsletter-signup-form").addEventListener("submit", function(event) {
      event.preventDefault();
      
      event.preventDefault(); // Prevent the default form submission
  
  var name = document.getElementById("modal-name-input").value;
  var email = document.getElementById("modal-email-input").value;
  var myModal = document.getElementById('NewsLetterSignupModal');
  
  
  
  // Perform form validation here if needed
  // Perform form validation here
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    invalidEmailMessage.classList.remove("hidden-displaynone");
    return;
  }


  // Send a POST request to your backend server with the form data
  fetch("https://backendprws.davidilie2.repl.co/emailcapture", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*' // Add the CORS header
    },
    mode: 'cors', // Set the mode to 'cors'
    body: JSON.stringify({ name: name, email: email })
  })
    .then(function(response) {
      if (response.ok) {
        myModal.close();
        document.body.style.overflow = 'auto';

        function showNotification(message) {
            const notification = document.getElementById("notification");
            notification.textContent = message;
            notification.style.opacity = "1";
            notification.style.display = "block";
          
            // Automatically hide the notification after 3 seconds
            setTimeout(() => {
              notification.style.opacity = "0";
              setTimeout(() => {
                notification.style.display = "none";
              }, 500); // Wait for the transition to complete before hiding the element
            }, 3000);
          }
          
          
          showNotification('You have successfully signed up! Thanks!');

        // Form submission successful
        // Handle success or redirect to a thank-you page
      } else {
        // Handle errors or display error messages
        console.log("Error:", response.status);
        if (response.status === 500) {
            document.getElementById("modal-email-error-errormessage").classList.remove("hidden-displaynone");
          } else if (response.status === 409) {
            document.getElementById("modal-email-duplicate-errormessage").classList.remove("hidden-displaynone");
          } else if (response.status === 422) {
            document.getElementById("modal-email-fake-errormessage").classList.remove("hidden-displaynone");
          }
      }
      
      
    })
    .catch(function(error) {
      console.log("Error:", error);
    });
    });

function hideErrorMessages(){

    

    errorEmailMessage.classList.add('hidden-displaynone');
    duplicateEmailMessage.classList.add('hidden-displaynone');
    fakeEmailMessage.classList.add('hidden-displaynone');


}

    document.getElementById("modal-newsletter-signup-form").addEventListener('submit', hideErrorMessages)

  });
  