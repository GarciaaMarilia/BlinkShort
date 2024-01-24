##

 <div style="text-align: center">
    <img src="https://cdn.iconscout.com/icon/free/png-64/html5-2038876-1720089.png" alt="html5" width="50px" height="50px" >
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css" width="50px" height="50px" >
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="Firebase" width="50px" height="50px" >
    <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="javascript" width="50px" height="50px" >
</div>

##

# BlinkShort Project

The BlinkShort Project is a URL shortening system with basic authentication features. Utilizing the Bootstrap framework for the user interface, is.gd's URL shortening service, and Firebase for authentication, this project aims to provide a simple and effective solution for generating shortened URLs.

# File Structure

- **index.html:** Main page containing the login form and the interface for URL shortening.
- **initial-page.html:** Redirect page after successful login.
- **functions.js:** File with JavaScript functions for login validation and URL shortening.
- **style.css:** Style file for customizing the project's appearance.
- **README.md:** This file, providing information and instructions about the project.

# How to Use

1. Open the index.html file in a web browser.
2. Enter your login credentials in the form.
3. After logging in, you will be redirected to the initial-page.html page.
4. In the main form, enter the desired URL and click "Shorten URL."
5. The shortened URL will be displayed on the page.

# Firebase Configuration

Make sure to correctly configure Firebase in the functions.js file. Replace the Firebase settings in the firebaseConfig object with the specific values from your Firebase project.

```bash
javascript
Copy code
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_DOMAIN.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
```

Author
Marilia Garcia - garciaamarilia@gmail.com
