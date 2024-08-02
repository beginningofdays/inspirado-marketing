Website Name:Inspirado-Marketing
Author: Albert Gillick

Introduction
------------
The Aim of the project is to create a Community Marketing Website. 
The goal of the website to develop an interative marketing website with functional API


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

MAP API
-------
This is a simple api setup on the contact page to show the business location. 
It has one interactive feature. 
1. Click on the Business Location and the address will popup. 

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│     ├── css/     
│     │   └── styles.css
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
│   │   └── Admin.astro
│   │   └── Banner.astro
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
│ 
└── package.json
