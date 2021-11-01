# lesgo
## _Beat Battles evolved_

     _ _ _         
  __| (_) |__  ___ 
 / _` | | '_ \/ __|
| (_| | | |_) \__ \
 \__,_|_|_.__/|___/
                      

[![Build Status]()]()

dibs is a cloud-enabled, beat-battle tested, freaking blow your top off, community-powered beat battle manager for Twitch/Discord. This was started during the DaRK aGeS of 2021 by the Kenny Beats Community.

- Website to let people download samples, vote
- Admin to let admins set the sample, start the clock
- Task runners 
- Authentication (via Discord or Auth0)
- Discord Bot

## Features

- Configurable membership checks for beat entry/voting. Version 1 uses twitch.
- Run and archive your beat battles



## Future Features
* SAAS based Cloud based login and submission for multiple beat battle hosts. 
* each user has a local account on the website that they sign up for, and upon account creation you verify your twitch subscription via OAuth, and it'll automatically check it for you upon each login. 
* each user can have a battle profile listing their socials etc for discovery and stuff. 
* each user can be marked as "won" at beat battle level, beat battle host level and could even have a counter displaying how many battles they've entered and how many they've won. submission should be simple once this system is in place.

* voting should be done in a swipe system that's evenly distributed to give each beat an equal chance of discovery etc - should be as streamlined and quick as possible for the user.

* prizes could be distributed to users 

## Tech


This project was bootstrapped with [React Starter Kit for Firebase][rfs] by [Kriasoft][kriasoft].

lesgo uses a number of open source projects to work properly:

- [Vue] - HTML enhanced for web apps!
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Firebase] - backend data and management
- [Discord] - for logins 
- [Passport.js][passport] (★ 17k) for authentication configured with stateless JWT tokens for sessions
- [PostgreSQL][psql] database pre-configured with a query builder and migrations using [Knex.js][knex] (★ 11k)
- [Google Cloud][gcp] & [Firebase][firebase] for serverless architecture - Cloud SQL, Cloud Functions, CDN hosting, file storage ([docs][fbdocs])

Also, you need to be familiar with [HTML][html], [CSS][css], [JavaScript][js] ([ES2015][es2015])).



### Prerequisites

- [Node.js][nodejs] v10.15 or higher + [Yarn][yarn] v1.17 or higher &nbsp; (_HINT: On Mac install
  them via [Brew][brew]_)
- [VS Code][vc] editor (preferred) + [Project Snippets][vcsnippets], [EditorConfig][vceditconfig],
  [ESLint][vceslint], [Prettier][vcprettier], and [Babel JavaScript][vcjs] plug-ins
- [Watchman][watchman] file watcher used by Relay Modern
- [PostgreSQL][postgres] v9.6 or newer, only if you're planning to use a local db for development
- 
### Getting Started

Just clone the repo, update environment variables in `.env` and/or `.env.local` file, and start
hacking:

```bash
$ cd dibs-website
$ npm i                       # Installs dependencies;
$ npm run serve              # Compile the app and opens it in a browser with "live reload"
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.


## License

Closed source for now, could be licensed to KBB.



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Vue]: <https://vuejs.org>
   [git-repo-url]: <https://github.com/DevByDIBS/dibs>
   [Firebase]: <https://firebase.google.com>
   [node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>

   [Twitch]: <http://twitch.tv>
   [Discord]: <https://discord.com>
   [rfs]: https://github.com/kriasoft/react-firebase-starter
[psql]: https://www.postgresql.org/
[cloudsql]: https://cloud.google.com/sql/
[passport]: http://www.passportjs.org/
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[js]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[es2015]: http://babeljs.io/learn-es2015/
[yarn]: https://yarnpkg.com/
[brew]: https://brew.sh/
[wm]: https://facebook.github.io/watchman/
[vc]: https://code.visualstudio.com/
[vcsnippets]: https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vcjs]: https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel
[watchman]: https://github.com/facebook/watchman
[postgres]: https://www.postgresql.org/

