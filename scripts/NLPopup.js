document.addEventListener('DOMContentLoaded', function() {
    var myModal = document.getElementById('NewsLetterSignupModal');
    var closeModal = document.getElementById('closeModal');
  
    // Show the modal
    myModal.showModal();

    //Disable Scrolling
    document.body.style.overflow = 'hidden';
  
    // Close the modal when the "Close" button is clicked
    closeModal.addEventListener('click', function() {
      myModal.close();
      //When the modal closes re-enable scrolling
      document.body.style.overflow = 'auto';
    });
    
  });

  

  