document.getElementById('registrationForm').addEventListener('submit', function(event) {
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
 
 /*if (fullName === '' || email === '' || phoneNumber === '' || birthDate === '' || address === '' || city === '' || region === '' || postalCode === '') {
    alert('Please fill in all fields.');
    return;
  } */
 
  // Additional validation logic can be added here
 
  // If all validations pass, you can proceed to submit the form
 
  document.getElementById('registrationForm').reset();
 
  gigya.cdp.init({
      apiDomain: 'EU5',
      bUnitId: '4_vuyHuRd8K_y9KrWOKNHd0A',
      appId: 'HIZ_ZYqCQQrOAywJZwT7Bg'
  })
  .then(function(sdk) { window.CDP = sdk;
      CDP.report('Registration_Form',
         {
    "emailid": email,
    "firstname": fullName,
    "Addressdata": [
        {
            "city": city,
            "Addressid": address,
            "Region": region,
            "postalcode": postalcode
        }
    ]
}
          );
          alert('Form submitted successfully!');
   }).catch(function(error) {
      console.error('CDP initialization error:', error);
      alert("Error reporting data to CDP.");
  });
 
 
  // Reporting to CDP after form submission
}
