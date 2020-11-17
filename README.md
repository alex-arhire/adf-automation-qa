## Alfresco ADF automation QA exercise

Do you love automation testing and you know how to solve the following exercise? Contact us! We may have a job for you :)
* https://jobs.smartrecruiters.com/Alfresco/743999676099136-senior-qa-automation-engineer

## Exercise

Fork this GitHub repository and push the produced code in your fork repository. 

Automate the following scenario using protractor:

1. Access <https://gyezch5t.trials.alfresco.com/>
2. Enter
- username: guest@example.com
- password: Password
- click SIGN IN
3. Click on NEW -> Create Folder
4. Create new folder dialog is displayed.
5. Enter your Github username.
6. Name has been added.
7. Click on 'Create' button.
8. The dialog is closed. Folder with your Github username is created in the current folder.
9. Click on NEW -> Create Folder
10. Create new folder dialog is displayed.
11. Enter your Github username.
12. Name has been added.
13. Click on 'Create' button.
14. The dialog is not closed.
15. The message "There's already a folder with this name. Try a different name" is displayed.
16. Click Cancel
17. Dialog is closed
18. Select the folder with your Github username
19. Right click on the folder
20. Click Delete
21. Folder is deleted

In the README file of the repository we want to see also the following sections:

1. ***Description*** Describes of how to run the automation test
+ Ran the test by using the "protractor config.js" command.

2. ***Explanation*** Describes the choice made in the solution
+ Decided to split the script into 4 tests for better readability, management, easier debugging: 
    + accessing the application 
    + authentication 
    + testing folder creation 
    + testing folder name uniqueness
+ Declared page objectes in a separte file for easier tracking.
+ Created a "createFolder" function so that I don't have to duplicate code in my tests.
+ Tried to use id locators whenever possible since they are the most efficient type of element locators.  

3. ***Prerequisites*** List here what/if anything needs to be installed
+ First of all we need to run "npm install" to download all the dependencies used by the project.
+ Side note: my firewall was very restrictive so the WebDriver could not contact the Selenium server.
  Solved this by adding a config paramater in the conf.js file (directConnect: true). This way the test script communicates directly with the browser driver.

You can send the link to your fork at mario.romano@alfresco.com. Feel free to attach also your cv and a link to your linkedin profile.

### Starter
The framework has already been setup in the /starter folder, please add your teest case in the spec.js file.

### Some info about protractor
* https://github.com/angular/protractor
* https://blog.cloudboost.io/building-your-first-tests-for-angular5-with-protractor-a48dfc225a75

### Some info about ADF
* https://github.com/Alfresco/alfresco-ng2-components
* https://alfresco.github.io/adf-component-catalog/
