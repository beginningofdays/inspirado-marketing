Website Name: Inspirado-Marketing
Author: Albert Gillick

Introduction
------------
The Aim of the project is to create a Community Marketing Website. 
The goal of the website to develop an interative marketing website with functional AP

Structure of the Website
------------------------
/
├── public/
│     ├── css/     
│     │   └── styles.css
│     │   └── leaflet.css
│     │ 
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




