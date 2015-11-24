# ALL THE THINGS Assignment!

Lets recap!

In this assignment, you will use:
- Heroku
- Node / Express
- jQuery 
- HTML / CSS / JavaScript
- Handlebars (optional)

First, set up a new project as we have been doing the past couple days. Start with the `npm init` process, add a `.gitignore`. Make sure to set the `start` alias as Heroku will need that as the entry point. Then set up your file structure:

project_name
  - node_modules
    - (whatever node modules you pull in through NPM)
  - server
    - public
      - scripts
        (your personal client scripts)
      - styles
        (your personal style sheets)
      - vendors
        (your vendor files, aka third party scripts)
    - views
      - (your view files, html and handlebars views)
    - app.js (server-side app.js only)

Your server side app.js should serve back:

A personal site about you. This can be the resume you created for your application if you wish, however there are some additional upgrades we would like to see. Keep in mind this is not your ‘Personal Project’ that we will start working on in Week 13 (Week 7 in-class). This is just a demonstration that you understand how all the technology works and communicates with each other. 

The personal site should use both jQuery and optionally use Handlebars. This means that you will need to bring those technologies in. However you can do this with NPM (`npm install jquery` for example). This will bring those technologies into your node_modules folder. You will need to move / copy those technologies into your vendors file, or serve that file/folder individually.

There will not be a ton of constraints around what your Web experience needs to be, just that it it something about you, that it uses the technologies listed.

Once you are complete, make sure that you not only check in the final project Heroku, but also that you check in your project to GitHub.

##Hard Mode
Animate the reveal of some information with the use of jQuery in some manner.

##Pro Mode
Use Handlebars for your application.

##Extreme Mode
To go one step further, you should split your templates out into different .html files, and use Ajax to get them from the server.
