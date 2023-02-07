Izrada projekta:

1. instaliramo react-js aplikaciju - npx create-react-app
2. instaliramo tailwind u terminalu - https://tailwindcss.com/docs/guides/create-react-app
3. brisemo nepotrebne fajlove koji nam nece trebati
4. otvaramo i uredujemo index.css fajl
5. otvaramo i uredujemo index.html fajl
6. kreiramo components folder
7. kreiramo i uredujemo TopBar.jsx komponentu
8. instaliramo paket react-icons
9. importujemo TopBar.jsx komponentu u App.js fajl
10. kreiramo i uredujemo Navbar.jsx komponentu
11. importujemo Navbar.jsx komponentu u App.js fajl
12. kreiramo i uredujemo Hero.jsx komponentu
13. importujemo Hero.jsx komponentu u App.js fajl
14. kreiramo i uredujemo Activities.jsx komponentu
15. kreiramo i uredujemo Activity.jsx komponentu koja ce sluziti kao props za Activities.jsx komponentu
16. importujemo Activity.jsx komponente u Activities.jsx komponentu
17. importujemo Activities.jsx komponentu u App.js fajl
18. kreiramo i uredujemo Booking.jsx komponentu
19. importujemo Booking.jsx komponentu u App.js fajl
20. kreiramo i uredujemo ImageGalleries.jsx komponentu
21. kreiramo i uredujemo ImageGallery.jsx komponentu
22. ImageGallery.jsx komponentu importujemo u ImageGalleries.jsx komponentu
23. ImageGalleries.jsx komponentu importujemo u App.js fajl
24. kreiramo i uredujemo Contact.jsx komponentu
25. kreiramo i uredujemo Footer.jsx komponentu



Github pages:

1. npm i gh-pages --save-dev
2. package.json -> "homepage": "https://kimamovic21.github.io/weekaway-reactjs-tailwindcss-cc-2022"
3. package.json -> "predeploy": "npm run build"
4. package.json -> "deploy": "gh-pages -d build"
5. git remote add origin https://github.com/kimamovic21/weekaway-reactjs-tailwindcss-cc.git
6. npm run deploy
