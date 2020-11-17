var WorkspacePageObjects = function () {
    //Login page
    this.username = element(by.id('username'));
    this.password = element(by.id('password'));
    this.loginButton = element(by.id('login-button'));

    //Workspace page
    this.appTitle = element(by.css('.adf-app-title'));
    this.newButton = element(by.css('.mat-raised-button'));
    this.createFolderOption = element(by.id('app.create.folder'));
    this.createFolderDialog = element(by.className('mat-dialog-container'));
    this.nameInput = element(by.id('adf-folder-name-input'));
    this.descriptionInput = element(by.id('adf-folder-description-input'));
    this.createFolderButton = element(by.id('adf-folder-create-button'));
    this.cancelButton = element(by.id('adf-folder-cancel-button'));
    this.deleteButton = element(by.id('app.context.menu.delete'));
    this.createdFolder = element(by.css('div.adf-datatable-cell:nth-child(2)'));
    this.alertMessage = element(by.className('mat-simple-snackbar'));

    this.createFolder = () => {
        let username = 'alex-arhire';

        this.newButton.click();
        this.createFolderOption.click();
        this.nameInput.sendKeys(username);
        this.createFolderButton.click();
    }
}

module.exports = WorkspacePageObjects;