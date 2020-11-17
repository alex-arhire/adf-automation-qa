// spec.js
//Imports
var  WorkspacePage = require('./workspace-page-objects');

describe('ADF Demo App', function() {
var workspace = new WorkspacePage();
var EC = protractor.ExpectedConditions;

 it('should navigate to the provided url', () => {
    browser.get('https://gyezch5t.trials.alfresco.com/');
    expect(browser.getCurrentUrl()).toContain('https://gyezch5t.trials.alfresco.com/');
  });

  it('should login with the provided credentials', () => {
    workspace.username.sendKeys('guest@example.com');
    workspace.password.sendKeys('Password');
    expect(workspace.loginButton.disabled).toBeFalsy();
    workspace.loginButton.click();
    expect(workspace.appTitle.isPresent()).toBeTruthy();
  })

  it('should create a new folder', () => {
    workspace.createFolder();
    browser.wait(EC.elementToBeClickable(workspace.createdFolder));
    expect(workspace.createFolderDialog.isPresent()).toBeFalsy();
    expect(workspace.createdFolder.isPresent()).toBeTruthy();
  })

  it('should check that an user cannot create folders with the same name', () => {
    workspace.createFolder();
    expect(workspace.createFolderDialog.isPresent()).toBeTruthy();
    expect(workspace.alertMessage.isPresent()).toBeTruthy();
    expect(workspace.alertMessage.getText()).toEqual("There's already a folder with this name. Try a different name.");
    workspace.cancelButton.click();
    browser.wait(EC.elementToBeClickable(workspace.createdFolder));
    expect(workspace.createFolderDialog.isPresent()).toBeFalsy();
    browser.actions().click(workspace.createdFolder, protractor.Button.RIGHT).perform();
    workspace.deleteButton.click();
    expect(workspace.createdFolder.isPresent()).toBeFalsy();
  })

});