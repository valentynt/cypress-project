describe("UI Elements Check", () => {
  const { username, password } = Cypress.env();

  beforeEach(() => {
    cy.visit(`https://${username}:${password}@qauto.forstudy.space/`);
    cy.wait(1000);
  });

  context("Header Buttons", () => {
    it("should find the 'Sign in' button", () => {
      cy.get("button").contains("Sign In").should("be.visible").click();
    });

    it("should find the 'Guest log in' button", () => {
      cy.get("button").contains("Guest log in").should("be.visible").click();
    });

    it("should find the 'Contacts' button", () => {
      cy.get("button").contains("Contacts").should("be.visible").click();
    });

    it("should find the 'About' button", () => {
      cy.get("button").contains("About").should("be.visible").click();
    });

    it("should find the 'Home' button", () => {
      cy.get("a").contains("Home").should("be.visible");
    });
  });

  context("Footer Links and Buttons", () => {
    it("should find the Facebook link and click it", () => {
      cy.get("a[href*='facebook']").should("be.visible").click();
    });

    it("should find the Telegram link and click it", () => {
      cy.get("a[href*='t.me']").should("be.visible").click();
    });

    it("should find the YouTube link and click it", () => {
      cy.get("a[href*='youtube']").should("be.visible").click();
    });

    it("should find the Instagram link and click it", () => {
      cy.get("a[href*='instagram']").should("be.visible").click();
    });

    it("should find the LinkedIn link and click it", () => {
      cy.get("a[href*='linkedin']").should("be.visible").click();
    });

    it("should find the ithillel.ua link and click it", () => {
      cy.get("a[href*='ithillel']")
        .should("be.visible")
        .and("include.text", "ithillel.ua");
    });

    it("should find the support email link and click it", () => {
      cy.get("a[href*='mailto']")
        .should("be.visible")
        .and("include.text", "support@ithillel.ua");
    });
  });
});
