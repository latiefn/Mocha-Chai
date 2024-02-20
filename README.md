# Mocha Chai
Setup Mocha Chai
- Install node.js
- go to folder and run 'npm init'
- run 'npm install --save-dev mocha'
- run 'npm install chai --save-dev'
- run 'npm install chai-http --save-dev'
- check dependencies in package.json

Edit run test file
- go to package.json
- change "test": "mocha kasiraja/api.js" to new file
- then type npm test in the terminal

Install mochawesom (Reporting)
- npm install --save-dev mochawesome
- npm install --save-dev mochawesome-report-generator
- update the package.json file (to make easy to run: "test:mochawesome": "mocha kasiraja/api.js --reporter mochawesome" )

Run the test and save the result to mochawesome
- run 'npm run test:mochawesome'

Instal Allure (Reporting)
- npm install --save-dev mocha-allure-reporter
- npm install --save-dev allure-commandline
- update the package.json file (to make easy to run:     "test:allure": "mocha kasiraja/api.js --timeout 5000 --reporter mocha-allure-reporter && allure generate --clean && allure open" )

Run the test and save the result to mochawesome
- npm run test:allure

Command git
- git add .
- git commit -m "xxx"
- git push origin master

add new branch
- git checkout -b new-branch-name
- git add .
- git commit -m "xxx"

Switch branch
- git checkout branch-name
- git push origin new-branch-name

Merge branch
- git checkout target-branch
- git merge source-branch
- git merge --continue (resolve any conflicts && if needed)
- git commit -m "xxx" (after resolving conflicts && if needed)
- git push origin branch

Pull code
- git status
- git pull origin branch-name
- git merge --continue (resolve any conflicts && if needed)
- git status
