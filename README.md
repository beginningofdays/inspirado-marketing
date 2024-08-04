<strong>Website Name:</strong> Inspirado-Marketing<br/>
<strong>Author:</strong> Albert Gillick<br/>
<strong>Sudent Number</strong>E10869287


## Table of Contents
- [Introduction](#introduction)
- [Website Structure](#websitestructure)
- [Features](#features)
- [Functions and Methods](functions&methods)
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
\
## Website Structure

## Features
* User Form: Collects user information such as name, email, and company.
* Local Storage: Saves user data locally for quick access and retrieval.
* Google Sheets Integration: Sends collected data to a Google Sheet using the Google Sheets API.
* Data Filtering: Allows users to filter and view data on another page.


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







