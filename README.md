# Caesar Cipher Tool

The Caesar Cipher Tool is a web-based application that demonstrates one of the earliest encryption techniques known as the Caesar Cipher. This tool enables users to encrypt and decrypt messages using a simple substitution cipher, where each letter in the plaintext shifts by a set number of positions along the alphabet. This project provides a hands-on experience in understanding basic encryption concepts and their role in cybersecurity.

The Caesar Cipher implementation includes both letter and number shifting capabilities:

- **Letter Shifting**: Each letter is shifted by the specified key value while preserving case:
```javascript
let code = char.charCodeAt(0);
let baseCode = char === char.toUpperCase() ? 65 : 97;
code = (code - baseCode + shift) % 26 + baseCode;
```

- **Number Shifting**: Numbers are shifted cyclically through 0-9:
```javascript
char = String.fromCharCode((char.charCodeAt(0) - 48 + shift) % 10 + 48);
```

The tool automatically handles special characters and spaces by leaving them unchanged, ensuring message formatting is preserved.

## Technologies Used
- **HTML5**: 
  - Semantic structure with clearly organized sections
  - Form controls for encryption settings
  - Responsive textarea elements for input/output
  
- **CSS3**: 
  - Flexbox layout for responsive design
  - Google Fonts integration (Roboto)
  - Modern styling with transitions and shadows
  - Color scheme featuring #0F9D58 as primary color
  
- **JavaScript**: 
  - Event listeners for real-time interface updates
  - Input validation and error handling
  - Clipboard integration for copying results
  - Dynamic heading updates based on mode selection

## Main Features
- **Dual Mode Operation**:
  - Encode: Convert plaintext to ciphertext
  - Decode: Convert ciphertext back to plaintext

- **Interactive Controls**:
  - Radio buttons for mode selection
  - Numeric input for shift key (1-25)
  - Apply button for execution
  - Copy button for results

- **User Experience**:
  - Real-time heading updates
  - Error messaging for empty inputs
  - Auto-clearing of fields on mode change
  - Visual feedback for copy operation
