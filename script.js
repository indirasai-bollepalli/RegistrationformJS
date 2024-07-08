document.addEventListener('DOMContentLoaded', function() {
  // Add event listener to the form submission
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Gather form data
    const formData = {
      firstName: document.getElementById('firstName').value.trim(),
      lastName: document.getElementById('lastName').value.trim(),
      email: document.getElementById('email').value.trim(),
      phoneNumber: document.getElementById('phoneNumber').value.trim(),
      birthDate: document.getElementById('birthDate').value.trim(),
      gender: document.querySelector('input[name="gender"]:checked').value,
      address1: document.getElementById('address1').value.trim(),
      address2: document.getElementById('address2').value.trim(),
      country: document.getElementById('country').value.trim(),
      state: document.getElementById('state').value.trim(),
      city: document.getElementById('city').value.trim(),
      pincode: document.getElementById('pincode').value.trim()
    };

    // Confirmation dialog for consent
    const consentConfirmed = confirm('Do you agree to share your full registration details? Click OK for yes, Cancel for no.');

    // Determine which function to call based on consent
    if (consentConfirmed) {
      shareFullDetails(formData);
    } else {
      shareBasicDetails(formData);
    }

    this.reset(); // Reset the form after submission
  });

  function shareFullDetails(formData) {
    gigya.cdp.init({
        apiDomain: 'EU5',
        bUnitId: '4_vuyHuRd8K_y9KrWOKNHd0A',
        appId: 'HIZ_ZYqCQQrOAywJZwT7Bg'
    })
    .then(function(sdk) {
      window.CDP = sdk;
      
      
 // REPLACE WITH REPORTED EVENT DATA
CDP.report('Registration_Form',
{
    "emailid": email,
    "firstname": firstName,
    "Addressdata": [
        {
            "Loremf01": "",
            "city": city,
            "Addressid": "",
            "Region": address1,
            "postalcode": pincode
        }
    ]
}
);

  alert('Form submitted successfully with full details!');
    })
    .catch(function(error) {
      console.error('CDP initialization error:', error);
      alert("Error reporting data to CDP.");
    });
  }

  function shareBasicDetails(formData) {
   gigya.cdp.init({
        apiDomain: 'EU5',
        bUnitId: '4_vuyHuRd8K_y9KrWOKNHd0A',
        appId: 'HIZ_ZYqCQQrOAywJZwT7Bg'
    })
    .then(function(sdk) {
      window.CDP = sdk;
      
     CDP.report('Customer Consent',
{
    "FirstName": firstName,
    "email": email
}
);

      alert('Form submitted successfully with basic details!');
    })
    .catch(function(error) {
      console.error('CDP initialization error:', error);
      alert("Error reporting data to CDP.");
    });
  }
});
