class InventoryPage {
  getBurgerMenu() {
    return cy.get("button#react-burger-menu-btn");
  }

  getCartIcon() {
    return cy.get(".shopping_cart_link");
  }

  getSortDropdown() {
    return cy.get(".product_sort_container");
  }

  getSortOptions() {
    return cy.get(".product_sort_container option");
  }

  clickItemByName(itemName) {
    cy.contains(".inventory_item_name", itemName).click();
  }
}

export default InventoryPage;
