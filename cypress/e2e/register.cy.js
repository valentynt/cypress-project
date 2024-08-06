import LoginPage from "../page_objects/LoginPage";

describe("Registration Test", () => {
  const loginPage = new LoginPage();
  const { loginPassword } = Cypress.env();
  const uniqueEmail = `searapan${Date.now()}@gmail.com`;

  beforeEach(() => {
    loginPage.visit();
  });

  it("should register a new user", () => {
    cy.get("button.header_signin").first().click();
    cy.get("button").contains("Registration").click();
    cy.wait(1000);
    cy.get("input#signupName").type("TestName");
    cy.get("input#signupLastName").type("TestLastName");
    cy.get("input#signupEmail").type(uniqueEmail);
    cy.get("input#signupPassword").type(loginPassword);
    cy.get("input#signupRepeatPassword").type(loginPassword);
    cy.get("button").contains("Register").click();
    cy.get("button#userNavDropdown")
      .contains(" My profile ")
      .should("be.visible");
  });
});
