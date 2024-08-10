import InventoryPage from "../page_objects/InventoryPage";
import LoginPage from "../page_objects/LoginPage";

describe("Inventory Page Tests", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");
  });

  it("should display the burger menu, cart icon, and sort dropdown", () => {
    inventoryPage.getBurgerMenu().should("be.visible");
    inventoryPage.getCartIcon().should("be.visible");
    inventoryPage.getSortDropdown().should("be.visible");
  });

  it("should display 4 sort options in the dropdown", () => {
    inventoryPage.getSortDropdown().click();
    inventoryPage.getSortOptions().should("have.length", 4);
  });

  it("should open the item page when an item is clicked", () => {
    inventoryPage.clickItemByName("Sauce Labs Backpack");
    cy.url().should("include", "/inventory-item.html?id=4");
  });
});
