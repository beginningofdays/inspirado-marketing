
What the project does
Why the project is useful
How users can get started with the project
Where users can get help with your project
Who maintains and contributes to the project




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
