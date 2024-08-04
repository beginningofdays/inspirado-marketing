<strong>Website Name:</strong> Inspirado-Marketing<br/>
<strong>Author:</strong> Albert Gillick<br/>
<strong>Sudent Number:</strong>E10869287


## Table of Contents
- [Introduction](#introduction)
- [Website Structure](#websitestructure)
- [Features](#features)
- [Functions&Methods](functions&methods)
- [Usage](#usage)
- [Demo](#demo)
- [Accessibility Report](#accessibility)
- [Lighthouse Report](#lighthouse)
- [Performance Report](#Performance)
- [Technologies](#technologies)
- [Conclusion](#conclusion)
  
## Introduction<br/>
The Aim of the project is to create a Community Marketing Website.<br/>
The Marketing Website offers information about the about the business services. <br/>
It allows the users to submit their information so inspirado marketing can contact them.<br/>

## Website Structure
```text
/
├── public/
│     ├── images/
│     │   ├── Social/
│     │   │   └── facebook.png
│     │   │   └── instagram.png
│     │   │   └── twitter.png
│     │   │   └── youtube.png
│     │   └── albert.jpg     
│     │   └── bdo.jpg
│     │   └── community-banner.jpg
│     │   └── community-building.jpg
│     │   └── community-group.jpg
│     │   └── community-header.jpg
│     │   └── community-marketing.jpg
│     │   └── community-online.jpg
│     │   └── community.png
│     │   └── hands.jpg
│     │   └── inspirado-logo.png
│     │   └── instagram.png
│     │   └── physio.jpg
│     │   └── social-media.png
│     │   └── stack.png
│     ├── js/
│         └── lightbox.json
│         └── services.json
│         └── teams.json
├── src/
│   ├── components/
│   │   ├── css/     
│   │   │   └── styles.css
│   │   │   └── leaflet.css
│   │   ├── js/
│   │   │   └── lightbox.json
│   │   │   └── services.json
│   │   │   └── teams.json
│   │   │   └── leaflet.js
│   │   │   └── leaflet-src.esm.js
│   │   │   └── leaflet-src.esm.js.map
│   │   │   └── leaflet-src.js.map
│   │   │   └── leaflet-src.js
│   │   │   └── leaflet.js.map
│   │   └── Admin.astro
│   │   └── Clients.astro
│   │   └── Company.astro
│   │   └── Contact.astro
│   │   └── Footer.astro
│   │   └── Form.astro
│   │   └── GetStarted.astro
│   │   └── Header.astro
│   │   └── Lightbox.astro
│   │   └── Logon.astro
│   │   └── MarketingVideo.astro
│   │   └── Services.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── admin.astro
│       └── company.astro
│       └── contact.astro
│       └── getstarted.astro
│       └── index.astro
│       └── logon.astro
│       └── work.astro
└── package.json
└── astro.config.mjs
└── package.lock.json
└── package.json
└── tsconfig.json
└── README.md
└── Ts env.d.ts
```
## Features
* User Form: Collects user information such as Firstname, Lastname, Company Name, Address, Email, Phone, Message and Date.
* Local Storage: Saves user data locally for quick access and retrieval.
* Google Sheets Integration: Sends collected data to a Google Sheet using the Google Sheetsdb API. 
* Data Filtering: Allows users to filter and view data on another page.
* Business Location: With the use of the leaflet API, the user can a google map style map to find and contact the business. 

## Functions&Methods
Within this section I will highlight some key <strong>Functions</stronG> and <strong>Methods</strong> I used throughout my website. 

<strong>Logon.astro</strong><br/>
Code will only run when the DOM is loaded
```javascript
document.addEventListener('DOMContentLoaded', () => {
});
```
Manages form submissions, validates user credentials, and either redirects or alerts depending on the user input.
```javascript
loginForm?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = usernameElement.value.trim();
    const password = passwordElement.value.trim();

    if (username === 'administrator' && password === 'lordoftherings') {
        // Redirect to admin page if credentials are correct
        window.location.href = '/inspirado-marketing/admin';
    } else {
        alert('Invalid username or password');
    }
});
```
Removes leading and trailing whitespace within the input fields 
```javascript
const username = usernameElement.value.trim(); 
const password = passwordElement.value.trim(); 
```
Redirects the user to admin.astro if they enter the correct credentials 
```javascript
window.location.href = '/inspirado-marketing/admin'; // Redirect to admin page
```
<strong>Admin.astro</strong><br/>
Code will only run when the DOM is loaded. Data is retrieved from the broswers local storage passed in from the forms on Index.astro and GetStarted.astro from sheetdb-form.
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterButton');
    const clearButton = document.getElementById('clearButton');

    if (filterButton) filterButton.addEventListener('click', applyFilter);
    if (clearButton) clearButton.addEventListener('click', clearFilters);

    // Initial display of data
    const storedData = localStorage.getItem('sheetdb-form');
    displayData(storedData ? JSON.parse(storedData) : []);
});
```
ApplyFilters() stored data based on user input 
```javascript
function applyFilter() {
    const filterFirstname = (document.getElementById('filterFirstname') as HTMLInputElement)?.value.toLowerCase() || '';
    const filterLastname = (document.getElementById('filterLastname') as HTMLInputElement)?.value.toLowerCase() || '';
    const filterCompanyName = (document.getElementById('filterCompanyName') as HTMLInputElement)?.value.toLowerCase() || '';
    const filterEmail = (document.getElementById('filterEmail') as HTMLInputElement)?.value.toLowerCase() || '';
    const filterDate = (document.getElementById('filterDate') as HTMLInputElement)?.value || '';

    const storedData = localStorage.getItem('sheetdb-form');
    let allData: MarketingInformation[] = storedData ? JSON.parse(storedData) : [];

    // Filtering logic
    if (filterFirstname) allData = allData.filter((entry) => (entry.firstName || '').toLowerCase().includes(filterFirstname));
    if (filterLastname) allData = allData.filter((entry) => (entry.lastName || '').toLowerCase().includes(filterLastname));
    if (filterCompanyName) allData = allData.filter((entry) => (entry.companyName || '').toLowerCase().includes(filterCompanyName));
    if (filterEmail) allData = allData.filter((entry) => (entry.email || '').toLowerCase().includes(filterEmail));
    if (filterDate) allData = allData.filter((entry) => entry.date?.startsWith(filterDate));

    displayData(allData);
}
```
clearfilters() clears all filter inputs and resets.
```javascript
function clearFilters() {
    const filterFirstname = document.getElementById('filterFirstname') as HTMLInputElement | null;
    const filterLastname = document.getElementById('filterLastname') as HTMLInputElement | null;
    const filterCompanyName = document.getElementById('filterCompanyName') as HTMLInputElement | null;
    const filterEmail = document.getElementById('filterEmail') as HTMLInputElement | null;
    const filterDate = document.getElementById('filterDate') as HTMLInputElement | null;

    if (filterFirstname) filterFirstname.value = '';
    if (filterLastname) filterLastname.value = '';
    if (filterCompanyName) filterCompanyName.value = '';
    if (filterEmail) filterEmail.value = '';
    if (filterDate) filterDate.value = '';

    const storedData = localStorage.getItem('sheetdb-form');
    displayData(storedData ? JSON.parse(storedData) : []);
}

```
displayData() displays data in the HTML table based on what filter is currently being used.
```javascript
function displayData(data: MarketingInformation[]) {
    const dataDisplay = document.getElementById('dataDisplay');
    if (dataDisplay) {
        dataDisplay.innerHTML = ''; // Clear previous content

        data.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.firstName || 'N/A'}</td>
                <td>${entry.lastName || 'N/A'}</td>
                <td>${entry.companyName || 'N/A'}</td>
                <td>${entry.email || 'N/A'}</td>
                <td>${entry.message || 'N/A'}</td>
                <td>${entry.date || 'N/A'}</td>
            `;
            dataDisplay.appendChild(row);
        });
    }
}
```
toLowerCase() sonverts a string to lowercase.
```javascript
toLowerCase().includes(filterLastname)
```

clearfilters() clears all filter inputs and resets.
```javascript

```

clearfilters() clears all filter inputs and resets.
```javascript

```


## Demo

Check out a live demo of the app [here](https://github.com/beginningofdays/inspirado-marketing).

Pages
-----
Index - This is the home page of the website. Allow users to get submit information and get service information
Work - This page shows the different clients inspirado agency has worked with. 
Company - This page gives some insight in the business and the people involved.
Contact - This page provides contact information
GetStarted - This page allows user to submit information 
Logon - Logon page for the Admin page
Admin - This page allows user to filter and viewthe information gather from the forms on Index page and GetStarted Page. 

Accessibility
-------------
The score for the website is 73

SEO 
---
Inspirado Marketing | Build & Engage
Leading community marketing agency offering comprehensive services to build and engage your brand's online community.

Website Features:
-----------------
FORM
*****
This Form exists on two pages, Index.html and GetStarted.html
Information entered into these forms will be storage in local storage. 
This information will be accessiable only from the admin.html page. 
admin.html can be accessed via the logon.html page. 

https://sheetdb.io/
usage 
inspiradomarketing776@gmail.com
lordoftherings!

LOGON PAGE
**********
Open Logon.html 
Enter the following
Username: administrator 
Password: lordoftherings

ADMIN PAGE
**********
Local storage data is retrieve and is presented as a table on this page. 
This setup provides an interface for administrators to view and filter data entries based on various criteria.

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).







