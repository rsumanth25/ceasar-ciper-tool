// Get elements from the DOM
const form = document.getElementById("controls");
const hInput = document.querySelector("#heading-input");
const hOutput = document.querySelector("#heading-output");
const selectEncodeOrDecode = document.getElementsByName("code");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const shiftKey = document.getElementById("shift-input");

// Update headings and clear fields on encoding/decoding selection
// This event listener updates the headings and clears the input/output fields when the user selects encode or decode
selectEncodeOrDecode.forEach((option) => {
    option.addEventListener("click", () => {
        hInput.textContent = option.value === "encode" ? "Plaintext" : "Ciphertext";
        hOutput.textContent = option.value === "encode" ? "Ciphertext" : "Plaintext";
        inputText.value = "";
        outputText.value = "";
    });
});

// Handle form submission to apply Caesar cipher
// This event listener is triggered when the user clicks the "Apply" button
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputTextValue = inputText.value;
    let selectedOption = Array.from(selectEncodeOrDecode).find((option) => option.checked);
    let shiftValue = parseInt(shiftKey.value);

    // Check if input is empty
    // If the input is empty, display an error message and return
    if (inputTextValue.trim() === "") {
        showError("Please enter a message to encrypt or decrypt.");
        return;
    }

    // Apply the Caesar cipher
    // Call the caesarCipher function with the selected option, input text, and shift value
    let cipherOutput = caesarCipher(selectedOption.value, inputTextValue, shiftValue);

    // Display the result in the output text area
    outputText.value = cipherOutput;
    hideError();
});

// Caesar cipher function
// This function applies the Caesar cipher encryption/decryption based on the provided parameters
function caesarCipher(decode, text, shift) {
    // If decoding, adjust the shift value
    if (decode === "decode") shift = 26 - shift;
    let result = "";

    // Iterate over each character in the text
    for (let char of text) {
        if (char.match(/[a-z]/i)) {
            // Shift letters
            let code = char.charCodeAt(0);
            let baseCode = char === char.toUpperCase() ? 65 : 97;
            code = (code - baseCode + shift) % 26 + baseCode;
            char = String.fromCharCode(code);
        } else if (char.match(/\d/)) {
            // Shift numbers
            char = String.fromCharCode((char.charCodeAt(0) - 48 + shift) % 10 + 48);
        }
        result += char;
    }
    return result;
}

// Copy output text to clipboard
// This event listener is triggered when the user clicks the "Copy" button
const copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener("click", () => {
    outputText.select();
    document.execCommand("copy");
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 2000);
});

// Display error message
// This function displays an error message to the user
const errorMessage = document.getElementById("error-message");
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}

// Hide error message
// This function hides the error message
function hideError() {
    errorMessage.style.display = "none";
}