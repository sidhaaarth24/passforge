# PassForge

PassForge is a simple, browser-based workspace for creating and checking passwords.  
Customize password length and character types, then generate passwords using your browser's cryptographic random generator.  
Check a password's estimated strength, entropy, crack time, and security checklist.  
Your passwords stay in your browser; no account or backend is needed.

[View the live site](https://sidhaaarth24.github.io/passforge/)

## Features

- Generate passwords from 8 to 64 characters.
- Choose uppercase letters, lowercase letters, numbers, and symbols.
- Optionally exclude ambiguous characters.
- Copy or reveal the generated password.
- Check a password's estimated strength, entropy, and common security rules.
- Switch between dark and light themes; the theme preference is saved in your browser.

## Run locally

Serve this folder with any static web server. For example, with Python:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Privacy and security

Password generation and checking happen in your browser. PassForge does not send passwords to a server or save them. The selected theme is stored locally in browser storage. When online, the page also requests fonts from Google Fonts.

Password generation uses the browser's cryptographic random number generator. The strength score and crack-time estimate are heuristic estimates, not guarantees or a substitute for a password manager or a security audit. Use a unique password for each account.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
