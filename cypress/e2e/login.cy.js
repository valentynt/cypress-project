import LoginPage from "../page_objects/LoginPage";

describe("Login Test with Basic Authentication", () => {
  const loginPage = new LoginPage();
  const loginEmail = Cypress.env("LOGIN_EMAIL");
  const loginPassword = Cypress.env("LOGIN_PASSWORD");

  it("should find the Sign In button and log in using the provided credentials", () => {
    loginPage.visit();
    cy.wait(60000);
    loginPage.login(loginEmail, loginPassword);
  });
});
