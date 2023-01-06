---
sidebar_position: 1
---

# Setting Up this Site

![Example banner](/docs/assets/docusaurus-logo-banner.png)

## Overview of Docusaurus

According to ChatGPT - Docusaurus is an open-source static site generator for creating documentation websites. It was designed to make it easy to maintain documentation websites for open-source projects, and includes features like automatic generation of a table of contents, search functionality, and the ability to easily update the website's layout and theme. Docusaurus is built with React, and uses Markdown for formatting content. It is intended to be easy to use and customize, and can be deployed to a variety of hosting platforms, including GitHub Pages and Netlify.

You can learn more about **docusaurus** at the **[docusaurus.io](https://docusaurus.io/)**.

### How I Set up and Host Docusaurus

Below are the steps I took to set up and host this site:

1. Setup an environment for a **Node.js** project.
   1. Install nvm by running ``curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash``
   2. Install and select node version 16 with ``nvm install 16`` followed by ``nvm use 16``
2. Run the following command to create a new docusaurus project: ``npx create-docusaurus@latest my-website classic`` ; change "my-website" to whatever you want your docusaurus project to be.
3. Run ``cd my-website`` to enter the project directory.
4. Run ``npm start`` to start the development server.
5. Open a browser and navigate to ``http://localhost:3000`` to view the site to ensure it is running properly.
6. Now you can stop the application by pressing ``Ctrl+C`` in the terminal.
   - Assuming that everything in steps 1-6 worked, you can now deploy the site to Cloudflare Pages by continuing to step 7.
7. Create a new repository on GitHub and push the project to it in order for Cloudflare to pull from. Insert the following commands one at a time into the terminal. **Note: you must be within the root directory of "my-website" when running these commands**
   ```bash
      git init
      git add -A
      git commit -m "initial commit"
      git branch -M main
      git remote add origin https://github.com/username/repository.git
      git push -u origin main
      ```
8. Head over to Cloudflare and sign up for an account if you don't already have one.
9. Create a new project on Cloudflare Pages and select the GitHub repository you just created.
10. Next, choose "Create React App" as the framework.
11. Finally, create an environment variable with the name of "NODE_VERSION" and the value of "16.14.2" or whatever subversion of nodejs 16 was installed in step number 1.
12. Click "Deploy Site" and wait for the site to deploy.
13. Once the site is deployed, you can view it by clicking the "View Site" button.
14. You can now make changes to the site and push them to GitHub to update the site.

Here is a tutorial that I initially followed https://dev.to/gaurishhs/deploying-docusaurus-to-cloudflare-pages-565g
