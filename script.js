document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  //const phoneNumber = document.getElementById('phoneNumber').value.trim();
  //const birthDate = document.getElementById('birthDate').value.trim();
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value.trim();
  const region = document.getElementById('region').value.trim();
  const postalCode = document.getElementById('postalCode').value.trim();

  /*if (fullName === '' || email === '' || phoneNumber === '' || birthDate === '' ||
      address === '' || city === '' || region === '' || postalCode === '') {
    alert('Please fill in all fields.');
    return;
  }*/

  // Show confirmation dialog for consent
  const consentConfirmed = confirm('Do you agree to the terms and conditions?');
  
  // Store form data and consent status
  const formData = {
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    birthDate: birthDate,
    address: address,
    city: city,
    region: region,
    postalCode: postalCode,
    consent: consentConfirmed ? 'Accepted' : 'Declined'
  };

  // Simulate storing data (replace with actual storage mechanism)
  storeFormData(formData);

  // If all validations pass and consent is confirmed
  alert('Form submitted successfully!');
  document.getElementById('registrationForm').reset();
}

function storeFormData(formData) {
  // Here you can implement your logic to store the form data, e.g., send to server, store in localStorage, etc.
  console.log('Storing form data:', formData);
}
