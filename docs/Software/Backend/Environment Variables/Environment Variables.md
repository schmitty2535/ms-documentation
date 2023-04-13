---
sidebar_position: 1
---

## What is an Environment Variable (env)
Environment variables are a list of variables that are extracted from an program/application. Environment variables are dynamic and can be easily changed base on the environment the application is being run in. Removing these variables from the application results in a more **dynamic application** with an added layer of **security** that **increases the speed of setting up** a new environment.

Environment Variables can contain the following types:
- System Variables
- User Variables
- Runtime/Process Variables

According to Adam Wiggins and the idea of  [The Twelve-Factor App](https://12factor.net),
> Env vars are easy to change between deploys without changing any code; unlike config files, there is little chance of them being checked into the code repo accidentally.

and the following should be included in the envs

> -   Resource handles to the database, Memcached, and other [backing services](https://12factor.net/backing-services)
> - Credentials to external services such as Amazon S3 or Twitter
> - Per-deploy values such as the canonical hostname for the deploy


## Environment Variables in JavaScript
To take advantage of environment variables in JavaScript or NodeJS I recommend using the [dotenv](https://www.npmjs.com/package/dotenv) npm library. Dotenv is a lightweight module that assists in loading envs from a `.env` file into `process.env`.

First, create a `.env` file by running `sudo nano .env` in the root of your project and add any desired variables. The file should look similar to that below:
``` bash title=".env" showLineNumbers
DB_HOST='192.168.4.2'
DB_USER='db-user'  
DB_PASSWORD='db-password' 
DB_DATABASE='db-schema'
UI_PORT=2222
```

### Installing dotenv
``` bash
npm install dotenv
```

### Using dotenv
In order to use dotenv, you need to require the dotenv package in the NodeJS file. To do so, include the following require statement.
``` javascript
require('dotenv').config();
```

Now if you `console.log(process.env);`  the output should look similar to that below with your `.env` contents being appended to the object:
``` bash
{
  LANGUAGE: 'en_US.UTF-8',
  NO_AT_BRIDGE: '1',
  LANG: 'en_US.UTF-8',
  LS_COLORS: 'rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:',
  TERM: 'xterm',
  DISPLAY: 'localhost:10.0',
  LC_ALL: 'en_US.UTF-8',
  PATH: '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
  MAIL: '/var/mail/root',
  LOGNAME: 'root',
  USER: 'root',
  HOME: '/root',
  SHELL: '/bin/bash',
  SUDO_COMMAND: '/usr/bin/node app.js',
  SUDO_USER: 'pi',
  SUDO_UID: '1000',
  SUDO_GID: '1000',
  # highlight-start
  DB_HOST: '192.168.4.2',
  DB_USER: 'db-user',
  DB_PASSWORD: 'db-password',
  DB_DATABASE: 'db-schema',
  UI_PORT: '2222'
  # highlight-end
}

```

Now the environment variables can be called using the following:
```javascript
let host = process.env.DB_HOST;
```

## Additional Information
###### For more information see the following links
###### - https://www.npmjs.com/package/dotenv
###### - https://12factor.net/config
