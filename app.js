/** THE FORMULAS:
 *  CELS TO FAHR: To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
 * FAHR TO CELS: The temperature T in degrees Celsius (°C) is equal to the temperature T in degrees Fahrenheit (°F) minus 32, times 5/9:
 * This is quite simple. But one of the inputs have to be empty. I want to make it just like the Google converter: so that whenever you change one of the inputs, the other input automatically gets changed. So it feels like a real converter. And in this case, you won't need a button, since you'll only be working with two input fields.
 */

// UI vars
 //const button = document.querySelector('.button-primary');
 const celsiusInput = document.querySelector('.celsius-input');
 const fahrenInput = document.querySelector('.fahren-input');

 // Temp values
celsiusInput.addEventListener('keyup', function(e) {
    let celsiusVal = celsiusInput.value;
    fahrenInput.value = calculateFahr(celsiusVal);

    e.preventDefault();
});

fahrenInput.addEventListener('keyup', function(e) {
    let fahrenVal = fahrenInput.value;
    celsiusInput.value = calculateCels(fahrenVal);

    e.preventDefault();
});

function calculateFahr(celsius) {
    return celsius * (9 / 5) + 32;
}

function calculateCels(fahren) {
    return (fahren - 32) * (5 / 9);
}

