import LoginPage from "../page_objects/LoginPage";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("should log in successfully with valid credentials", () => {
    loginPage.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("should show an error message for invalid password", () => {
    loginPage.login("standard_user", "wrong_password");
    loginPage
      .getErrorMessage()
      .should(
        "contain",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });

  it("should show an error message for invalid username", () => {
    loginPage.login("wrong_user", "secret_sauce");
    loginPage
      .getErrorMessage()
      .should(
        "contain",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });

  it("should show an error message for locked out user", () => {
    loginPage.login("locked_out_user", "secret_sauce");
    loginPage
      .getErrorMessage()
      .should("contain", "Epic sadface: Sorry, this user has been locked out.");
  });

  it("should show an error when username is missing", () => {
    loginPage.fillPassword("secret_sauce");
    loginPage.clickLogin();
    loginPage
      .getErrorMessage()
      .should("contain", "Epic sadface: Username is required");
  });
});
