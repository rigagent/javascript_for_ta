let citiesByCountry = {
    germany: ["Berlin", "Hamburg", "Munich", "Frankfurt", "Drezden"],
    usa: ["New York", "Washington", "Boston", "Chicago", "Los Angeles"],
    ukraine: ["Kyiv", "Kharkiv", "Lviv", "Dnipro", "Odesa"]
};

let countryDropdown = document.getElementById('country');
let citiesDropdown = document.getElementById('cities');
let selectedInfo = document.getElementById('selectedInfo');

function getCities() {
    let selectedCountry = countryDropdown.value;
    citiesDropdown.innerHTML = '';

    if (selectedCountry in citiesByCountry) {
        citiesByCountry[selectedCountry].forEach(city => {
            let option = document.createElement('option');
            option.textContent = city;
            citiesDropdown.appendChild(option);
        });
    }

    const selectedCountryName = countryDropdown.options[countryDropdown.selectedIndex].text;
    const selectedCity = citiesDropdown.value;
    selectedInfo.textContent = `Selected Country: ${selectedCountryName}, Selected City: ${selectedCity}`;
}

countryDropdown.addEventListener('change', getCities);

citiesDropdown.addEventListener('change', function() {
    const selectedCountryName = countryDropdown.options[countryDropdown.selectedIndex].text;
    const selectedCity = citiesDropdown.value;
    selectedInfo.textContent = `Selected Country: ${selectedCountryName}, Selected City: ${selectedCity}`;
});

getCities();
