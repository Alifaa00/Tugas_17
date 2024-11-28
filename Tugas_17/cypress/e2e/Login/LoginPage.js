class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLoginButton() {
    cy.get('button[type="submit"]').click();
  }

  getErrorMessage() {
    return cy.get('.oxd-alert-content-text');
  }

  getErrorMessageEmpty(){
    return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]');
  }

  getDashboardHeader() {
    return cy.get('.oxd-topbar-header-breadcrumb > .oxd-text');
  }
}

export default LoginPage;
