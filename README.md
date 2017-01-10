# webdriverio-demo

## Prerequisite
-NodeJS
-Java

## To start from Scratch
Create folder webdriverio-demo

CD into webdriverio-demo
cd webdriverio-demo

npm init y

npm install webdriverio --save-dev

./node_modules/.bin/wdio config

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

npm install wdio-selenium-standalone-service --save-dev

 npm install wdio-spec-reporter --save-dev 
uncomment/ update/add standalone selenium
services: ['selenium-standalone']

        browserName: 'firefox',
		marionette: true

update package.json 
"test": "echo \"Error: no test specified\" && exit 1"
to
"test": "wdio wdio.conf.js"
 Create Test Folder



