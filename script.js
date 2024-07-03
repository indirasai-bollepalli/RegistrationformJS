document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform form validation here
    validateForm();
  });
  
  function validateForm() {
    // Basic form validation example (you can expand this)
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const birthDate = document.getElementById('birthDate').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const region = document.getElementById('region').value.trim();
    const postalCode = document.getElementById('postalCode').value.trim();
    
    if (fullName === '' || email === '' || phoneNumber === '' || birthDate === '' || address === '' || city === '' || region === '' || postalCode === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Additional validation logic can be added here
    
    // If all validations pass, you can proceed to submit the form
    alert('Form submitted successfully!');
    document.getElementById('registrationForm').reset();
  }
  