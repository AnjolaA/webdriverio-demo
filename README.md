# webdriverio-demo

## Prerequisite
* NodeJS
* Java

## To start from Scratch
Create folder webdriverio-demo

CD into webdriverio-demo

    cd webdriverio-demo

### Install webdriverio and setup config 

Initiate Project
    npm init -y

Install webdriverio
    npm install webdriverio --save-dev

Setup config
    ./node_modules/.bin/wdio config


Answer with the responses below

Q: Where do you want to execute your tests?
A: On my local machine

Q: Which framework do you want to use?
A: mocha

Q: Shall I install the framework adapter for you?
A: Yes (just press enter)

Q: Where are your test specs located?
A: ./test/specs/*/.js (just press enter)

Q: Which reporter do you want to use?
A: dot (just press space and enter)

Q: Shall I install the reporter library for you?
A: Yes (just press enter)

Q: Do you want to add a service to your test setup?
A: none (just press enter, let’s skip this for simplicity)

Q: Level of logging verbosity:
A: silent (just press enter)

Q: In which directory should screenshots gets saved if a command fails?
A: ./errorShots/ (just press enter)

Q: What is the base url?
A: http://localhost (just press enter)


### Install selenium standalone service

    npm install wdio-selenium-standalone-service --save-dev

### Install reporter

    npm install wdio-spec-reporter --save-dev 

### Add selenium service to config (wdio.conf.js)

uncomment/update/add standalone selenium

    services: ['selenium-standalone']

    browserName: 'chrome'


### Update Test Script 

update - "test": "echo \"Error: no test specified\" && exit 1" to

    "test": "wdio wdio.conf.js"

### Write Tests

Create Test Folder named 'test' with a subfolder called 'specs'

Save test files (*.js) in the specs folder

### Run tests

    npm test



