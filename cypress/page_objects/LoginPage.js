class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  fillUsername(username) {
    cy.get("input#user-name").type(username);
  }

  fillPassword(password) {
    cy.get("input#password").type(password);
  }

  clickLogin() {
    cy.get("input#login-button").click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }

  getErrorMessage() {
    return cy.get('h3[data-test="error"]');
  }
}

export default LoginPage;
