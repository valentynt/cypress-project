import LoginPage from "../page_objects/LoginPage";

describe("Login Test with Basic Authentication", () => {
  const loginPage = new LoginPage();

  it("should find the Sign In button and log in using the provided credentials", () => {
    loginPage.visit();
  });
});

