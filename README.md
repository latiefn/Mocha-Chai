# Mocha Chai

Edit run test file
- go to package.json
- change "test": "mocha kasiraja/api.js" to new file
- then type npm test in the terminal

Install mochawesom using this commands
- npm install --save-dev mochawesome
- npm install --save-dev mochawesome-report-generator
- update the package.json file (to make easy to run)

Run the test and save the result to mochawesome
- run 'npm run test:mochawesome'

Instal Allure
- npm install --save-dev mocha-allure-reporter
- npm install --save-dev allure-commandline
- update the package.json file (to make easy to run)

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
- git commit -m "xxx" (after resolve conflicts && ig needed)
- git push origin branch
