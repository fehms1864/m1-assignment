function getAdditionalFields() {
    var dropdown = document.getElementById('dropdown');
    var emailSelected = document.getElementById('option1');
    var phoneSelected = document.getElementById('option2');
    
    var emailLabel = "<label>Enter your email</label>";
    var emailInput = "<input type='email' name='email'>";

    var phoneLabel = "<label>Enter your phone number</label>";
    var phoneInput = "<input type='tel' name='phone'>";

    if (dropdown.value === emailSelected.value) {
        document.getElementById('additionalfields').innerHTML = emailLabel + emailInput;
    } else if (dropdown.value === phoneSelected.value) {
        document.getElementById('additionalfields').innerHTML = phoneLabel + phoneInput;
    }
}

document.getElementById('dropdown').addEventListener('change', getAdditionalFields);