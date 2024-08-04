<strong>Website Name:</strong> Inspirado-Marketing<br/>
<strong>Author:</strong> Albert Gillick<br/>
<strong>Sudent Number:</strong>E10869287


## Table of Contents
- [Introduction](#introduction)
- [Website Structure](#websitestructure)
- [Features](#features)
- [ClassesFunctionsMethods](#classesfunctionsmethods)
- [Usage](#usage)
- [Demo](#demo)
- [Usage](#usage)
- [Pages](#pages)
- [Accessibility Report](#accessibility)
- [Lighthouse Report](#lighthouse)
- [Performance Report](#Performance)
- [Seo](#seo)
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

## Classes Functions Methods
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
<strong>Form.astro</strong><br/>
This code exists on both Index.astro and GetStarted.astro, but for this explaination I will be focusing on the Form present on the Index.astro<br/>

The structure of the form.
clearfilters() clears all filter inputs and resets.
```javascript
class FormSubmission {
    firstName: string;
    lastName: string;
    companyName: string;
    address: string;
    email: string;
    phone: string;
    message: string;
    date: string;

    constructor(
        firstName: string,
        lastName: string,
        companyName: string,
        address: string,
        email: string,
        phone: string,
        message: string,
        date: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.message = message;
        this.date = date;
    }
}
```
This function sets up the form submission event listener and processes the form data. It saves the form submission data to localStorage which in turn sends form data to the Google Sheetsdb API using fetch. Logging any errors encountered during the fetch request and resets the form if successful.
```javascript
document.getElementById('sheetdb-form')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Gather form data
    const firstName = (document.getElementById('firstName') as HTMLInputElement)?.value ?? '';
    const lastName = (document.getElementById('lastName') as HTMLInputElement)?.value ?? '';
    const companyName = (document.getElementById('companyName') as HTMLInputElement)?.value ?? '';
    const address = (document.getElementById('address') as HTMLInputElement)?.value ?? '';
    const email = (document.getElementById('email') as HTMLInputElement)?.value ?? '';
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value ?? '';
    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value ?? '';
    const date = new Date().toLocaleString();

    // Create FormSubmission instance
    const formSubmission = new FormSubmission(
        firstName,
        lastName,
        companyName,
        address,
        email,
        phone,
        message,
        date
    );

    // Store form data in local storage
    let allData: FormSubmission[] = JSON.parse(localStorage.getItem('sheetdb-form') ?? '[]');
    allData.push(formSubmission);
    localStorage.setItem('sheetdb-form', JSON.stringify(allData));

    // Submit data to API
    fetch(document.getElementById('sheetdb-form')?.action ?? '', {
        method: 'POST',
        body: new FormData(document.getElementById('sheetdb-form') as HTMLFormElement),
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error:', data.error);
        } else {
            console.log('Success:', data);
            (document.getElementById('sheetdb-form') as HTMLFormElement).reset(); // Reset form
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
```
.reset() This method is called on the HTMLFormElement and resets all the form fields 
```javascript
(document.getElementById('sheetdb-form') as HTMLFormElement).reset(); 
```
## Demo

Check out a live demo of the app [here](https://github.com/beginningofdays/inspirado-marketing).

## Usage
Google Account to access Google Sheetdb API <br/>
Visit: https://sheetdb.io/
<br/>
Use the following:<br/>
Email: inspiradomarketing776@gmail.com<br/>
Password:lordoftherings!

Administrator Information to logon to Administration page of website. 
Visit: https://beginningofdays.github.io/inspirado-marketing/logon/ <br/> 
Enter the following credentials:<br/> 
Username: administrator<br/> 
Password: lordoftherings

## Pages
* Index - This is the home page of the website. Allow users to submit personal / business information and get service information.
* Work - This page shows the different clients inspirado Marketing has worked with and is currently working with. 
* Company - This page gives some insight in the business and the people involved.
* Contact - This page provides contact information
* GetStarted -This page allows user to submit personal / business information
* Logon - Logon page for the Admin page
* Admin - This page allows user to filter and view the information gathered from the forms on the Index page and GetStarted Page. 

## Accessibility Report
This report is in the Docs Folder

## Lighthouse Report
This report is in the Docs Folder

## Performance Report
This report is in the Docs Folder

## Seo Report
This report is in the Docs Folder

Standard Meta Description Applied to Website 
```javascript
   <meta charset="UTF-8" />
   <meta name="description" content="Leading community marketing agency offering comprehensive services to build and engage your brand's online community." />
   <meta name="viewport" content="width=device-width" />
   <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
   <meta name="generator" content={Astro.generator} />
```
```javascript
<Layout title="Inspirado Marketing | Build & Engage">
```


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







