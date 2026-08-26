# PassForge

> A modern password generator and password strength checker built with HTML, CSS, and JavaScript.

PassForge is a modern, responsive, client-side web application designed to help users generate customizable passwords and evaluate the strength of existing passwords.

It provides control over password length and character types, real-time password strength analysis, password quality feedback, clipboard support, and dark/light themes in a clean and responsive interface.

---

## Live Demo

https://sidhaaarth24.github.io/passforge/

---

## Features

### Password Generator

PassForge includes a customizable password generator that allows users to generate random passwords based on their preferred settings.

Users can configure:

- Password length
- Uppercase letters
- Lowercase letters
- Numbers
- Symbols

The generated password is created directly in the browser.

---

### Password Length

PassForge provides an interactive password length slider.

Users can select the desired password length and see the selected value update instantly.

The length can be adjusted according to the user's requirements.

---

### Character Options

Users can control which character types are included in generated passwords.

Supported character categories include:

| Character Type | Character Set |
|---|---|
| Uppercase Letters | `A-Z` |
| Lowercase Letters | `a-z` |
| Numbers | `0-9` |
| Symbols | `! @ # $ % ^ & * ...` |

Users can enable or disable each category individually.

For example:

- Uppercase letters: Enabled
- Lowercase letters: Enabled
- Numbers: Enabled
- Symbols: Enabled

This allows users to create passwords with different combinations of characters depending on their requirements.

---

### Password Strength Checker

PassForge includes a dedicated password strength checker for evaluating existing passwords.

The checker analyzes several characteristics, including:

- Password length
- Uppercase characters
- Lowercase characters
- Numbers
- Symbols
- Character variety
- Overall complexity

The result is displayed using a visual password quality indicator.

Possible strength levels include:

- Very Weak
- Weak
- Medium
- Strong
- Very Strong

The strength indicator updates dynamically as the password is entered or modified.

---

### Password Quality Indicator

The password quality marker provides a quick visual representation of the analyzed password strength.

The general evaluation process is:

**Password → Length Analysis → Character Analysis → Complexity Evaluation → Strength Result**

This allows users to immediately identify whether a password may need improvement.

---

### Password Regeneration

Users can generate a new password without changing their existing configuration.

For example:

| Setting | Value |
|---|---|
| Length | 20 |
| Uppercase | Enabled |
| Lowercase | Enabled |
| Numbers | Enabled |
| Symbols | Enabled |

Clicking the generate button creates another password using the same configuration.

---

### Copy to Clipboard

PassForge provides a copy-to-clipboard function for generated passwords.

Users can copy a generated password with a single click and paste it into another application, website, or password manager.

The interface provides feedback when the password has been copied successfully.

---

### User-Defined Password Generation

PassForge gives users direct control over the composition of generated passwords.

Users can decide which character categories should be used.

For example, a user can create a configuration using:

- Uppercase letters
- Lowercase letters
- Numbers
- Symbols

Alternatively, users can disable specific character categories when a website or application has particular password requirements.

---

## Password Strength Analysis

PassForge evaluates passwords using multiple characteristics rather than relying only on password length.

### Length

Password length is an important factor when evaluating password strength.

In general, longer passwords provide a larger number of possible combinations.

### Character Variety

PassForge checks whether a password contains different character categories:

- Lowercase letters
- Uppercase letters
- Numbers
- Symbols

### Complexity

The checker considers the overall composition of the password.

A password containing multiple character categories and sufficient length will generally receive a higher strength assessment than a short password containing only one character type.

---

## Password Strength Levels

### Very Weak

Passwords in this category are generally very short, predictable, or use extremely common patterns.

Example:

**123456**

---

### Weak

Passwords in this category may contain some additional complexity but remain relatively easy to guess.

Example:

**password123**

---

### Medium

Passwords in this category generally contain multiple character types but may still be relatively short or predictable.

Example:

**Password123**

---

### Strong

Passwords in this category generally have better length and character diversity.

Example:

**P7m@Q2x!L9v#T4**

---

### Very Strong

Passwords in this category generally combine sufficient length, multiple character categories, and low predictability.

Example:

**vT7@qL2#xP9!mK4$zR8**

The examples above are for demonstration only and should not be reused for real accounts.

---

## User Interface

PassForge uses a modern card-based interface focused on usability and visual clarity.

The interface includes:

- Responsive layout
- Password generator panel
- Password checker panel
- Password length slider
- Character-selection controls
- Password quality indicator
- Copy button
- Generate button
- Theme switcher
- Header
- Footer
- Interactive controls
- Hover effects
- Active states
- Responsive typography

The application uses a green-focused visual theme.

---

## Header

The PassForge header provides the primary application branding and controls.

It includes the PassForge identity and a theme control for switching between dark and light modes.

The header is designed to remain usable across desktop, tablet, and mobile screen sizes.

---

## Footer

The PassForge footer provides copyright information and developer attribution.

It displays:

**© 2026 PassForge. All rights reserved.**

**Developed by [Sidharth Kumar](https://sidhaaarth24.github.io/sidsphere/)**

The developer name links to the personal portfolio website.

---

## Responsive Design

PassForge is designed to work across different screen sizes.

Supported devices include:

- Desktop
- Laptop
- Tablet
- Mobile

The layout automatically adapts to smaller screens while maintaining readable content and accessible controls.

---

## How Password Generation Works

PassForge generates passwords based on the configuration selected by the user.

The general process is:

**User Configuration → Character Pool → Password Length → Random Character Selection → Generated Password → Strength Analysis**

The generation process runs locally in the user's browser.

---

## How Password Checking Works

The password checker evaluates the password entered by the user.

The general process is:

**User Password → Length Check → Character Check → Complexity Evaluation → Strength Result**

The result is displayed through the password quality indicator.

---

## Character Pool

The password generator creates a character pool according to the user's selected options.

The available character categories are:

**Uppercase Letters**

ABCDEFGHIJKLMNOPQRSTUVWXYZ

**Lowercase Letters**

abcdefghijklmnopqrstuvwxyz

**Numbers**

0123456789

**Symbols**

! @ # $ % ^ & * ( ) _ + - = [ ] { } | ; : , . < > ?

Only the enabled categories are used when generating the password.

---

## Example Configuration

A user may select:

| Setting | Selection |
|---|---|
| Password Length | 20 |
| Uppercase Letters | Enabled |
| Lowercase Letters | Enabled |
| Numbers | Enabled |
| Symbols | Enabled |

PassForge then generates a password using the selected configuration.

Every generated password can be different even when the same settings are used.

---

## Security Considerations

PassForge is intended to be a password generation and password strength analysis utility.

For better account security, users should:

- Use unique passwords for different accounts.
- Prefer longer passwords.
- Avoid predictable information.
- Avoid reusing old passwords.
- Avoid common passwords.
- Consider using a reputable password manager.
- Enable multi-factor authentication when available.

Users should avoid passwords based on:

- Names
- Birth dates
- Phone numbers
- Addresses
- Common words
- Sequential numbers
- Repeated characters
- Previously used passwords

---

## Privacy

PassForge is designed as a client-side application.

The core password-generation and password-checking functionality is performed locally in the user's browser.

The application does not require:

- User accounts
- Login
- Database storage
- A backend server
- Password storage

Passwords entered into the checker are processed locally by the application.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling, layout, animations, and responsive design |
| JavaScript | Password generation, interactions, and strength analysis |
| Font Awesome | Interface icons |
| Git | Version control |
| GitHub Pages | Static website deployment |

PassForge is primarily a client-side web application.

---

## Project Structure

The project can be organized as follows:

    passforge/
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md

The project can also be implemented as a single HTML file with CSS and JavaScript embedded directly into `index.html`.

---

## Getting Started

### Clone the Repository

    git clone https://github.com/sidhaaarth24/passforge.git

### Navigate to the Project

    cd passforge

### Run the Application

Open `index.html` in a modern web browser.

No package installation or backend server is required.

For development, you can use the **Live Server** extension in Visual Studio Code.

---

## How to Use

### Generate a Password

1. Open PassForge.
2. Adjust the password length.
3. Select the desired character types.
4. Click the generate button.
5. Review the generated password.
6. Copy the password using the copy button.

### Check a Password

1. Open the password checker.
2. Enter or paste a password.
3. Review the password strength indicator.
4. Check the displayed quality level.
5. Improve the password if necessary.

---

## Browser Support

PassForge is designed for modern web browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

For the best experience, use an up-to-date browser.

---

## Author

**Sidharth Kumar**

### Portfolio: [https://sidhaaarth24.github.io/sidsphere/](https://sidhaaarth24.github.io/sidsphere/)

---

## License

This project is a personal project created by **Sidharth Kumar**.

---

## Acknowledgements

PassForge is built using standard web technologies and open-source resources.

Special thanks to the open-source web development ecosystem for the tools, libraries, documentation, and resources that make projects like PassForge possible.

---

## ⭐ Support

If you find PassForge useful or interesting, consider giving the repository a ⭐ on GitHub.

---
