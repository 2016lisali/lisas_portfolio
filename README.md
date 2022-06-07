# Lisa's Portfolio

The idea behind this project was to create a showcase of all my big projects during my study at Tafe QLD. This is a Single Page Application and is built with React and React-bootstrap.

![site image](https://github.com/2016lisali/lisas_portfolio/blob/main/public/assets/lisas_portfolio_responsive.jpg)

## Features

- responsive design, display well on mobiles, tablets, laptops and desktops
- form data will be validated on submit
- use emailjs to send contact message

<p align="right">(<a href="#top">back to top</a>)</p>

## Build With

- React
- React-bootstrap
- react-hook-form
- react-animated-css
- Sass
- Emailjs

<p align="right">(<a href="#top">back to top</a>)</p>

## Try it

You can find the demo [here](https://wonderlisa.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

## How to run the app

1. Either clone or download the app and open the folder in the CLI

   ```sh
   git clone https://github.com/2016lisali/lisali.git
   ```

2. Install all dependencies
   ```sh
   npm install
   ```
3. Sing in to https://www.emailjs.com/, get your service_id, template_id and public_key.
4. Create a `.env` file and enter following fields
   ```env
    PORT = YOUR PORT NUMBER
    REACT_APP_SERVICE_ID = YOUR SERVICE ID
    REACT_APP_TEMPLATE_ID = YOUR_TEMPLATE_ID
    REACT_APP_PUBLIC_KEY = PUBLIC_KEY
   ```
5. Cd to client folder in terminal and start client server
   ```sh
   npm start
   ```

The webpage will be served at http://localhost:YOUR_PORT_NUMBER

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [x] Add 'Contact me' section
- [x] Add back to top buttons
- [x] Add contact list as the sidebar
- [ ] Add more projects

<p align="right">(<a href="#top">back to top</a>)</p>
