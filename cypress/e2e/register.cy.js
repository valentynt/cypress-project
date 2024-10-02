import LoginPage from "../page_objects/LoginPage";

describe("Registration Validation Tests", () => {
  const loginPage = new LoginPage();
  const { loginPassword } = Cypress.env();
  const uniqueEmail = `searapan${Date.now()}@gmail.com`;

  beforeEach(() => {
    loginPage.visit();
    cy.get("button.header_signin").first().click();
    cy.get("button").contains("Registration").click();
    cy.wait(1000);
  });

  context("Name Field Validations", () => {
    it("should show an error for empty 'Name' field", () => {
      cy.get("input#signupName").clear();
      cy.get("input#signupLastName").clear();
      cy.contains("Name required").should("be.visible");
      cy.get("input#signupName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });

  context("Last Name Field Validations", () => {
    it("should show an error for empty 'Last name' field", () => {
      cy.get("input#signupLastName").clear();
      cy.get("input#signupName").clear();
      cy.contains("Last name required").should("be.visible");
      cy.get("input#signupLastName").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });

  context("Email Field Validations", () => {
    it("should show an error for invalid 'Email'", () => {
      cy.get("input#signupEmail").clear().type("invalidEmail");
      cy.get("input#signupName").clear();
      cy.contains("Email is incorrect").should("be.visible");
      cy.get("input#signupEmail").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });

  context("Password Field Validations", () => {
    it("should show an error for wrong 'Password' length (less than 8 characters)", () => {
      cy.get("input#signupPassword").clear().type("A1b");
      cy.get("input#signupName").clear();
      cy.contains(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      ).should("be.visible");
      cy.get("input#signupPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });

  context("Re-enter Password Field Validations", () => {
    it("should show an error if passwords do not match", () => {
      cy.get("input#signupPassword").clear().type(loginPassword);
      cy.get("input#signupRepeatPassword").clear().type("DifferentPassw1");
      cy.get("input#signupName").clear();
      cy.contains("Passwords do not match").should("be.visible");
      cy.get("input#signupRepeatPassword").should(
        "have.css",
        "border-color",
        "rgb(220, 53, 69)"
      );
    });
  });

  context("Register Button Validations", () => {
    it("should disable the 'Register' button if data is incorrect", () => {
      cy.get("input#signupName").clear().type("A");
      cy.get("input#signupLastName").clear().type("B");
      cy.get("input#signupEmail").clear().type("invalidEmail");
      cy.get("input#signupPassword").clear().type("short");
      cy.get("input#signupRepeatPassword").clear().type("short");
      cy.get("button").contains("Register").should("be.disabled");
    });
  });
});
