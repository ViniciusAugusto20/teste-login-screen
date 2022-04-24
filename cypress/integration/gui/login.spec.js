/// <reference types="cypress" />

describe("Login", () => {

  beforeEach(() => cy.visit(`${Cypress.config('baseUrl')}`));

  it("try to login", () => {
    cy.get("#qa-email-input").type("emailfortest@test.com")
    cy.get("#qa-password-input").type("teste123")
    cy.get("#qa-submit-button").click()
    cy.get("#qa-toast-success").should("exist")
  });

  it("try to login with wrong password", () => {
    cy.get("#qa-email-input").type("emailfortest@test.com")
    cy.get("#qa-password-input").type("teste12345")
    cy.get("#qa-submit-button").click()
    cy.get("#qa-toast-error").should("exist")
  });

  it("try to login with wrong e-mail and no password", () => {
    cy.get("#qa-email-input").type("lorem")
    cy.get("#qa-email-input-error").should("exist")
    cy.get("#qa-password-input-error").should("exist")
  });

  it("try to login with blocked user", () => {
    cy.get("#qa-email-input").type("blockeduser@test.com")
    cy.get("#qa-password-input").type("teste123")
    cy.get("#qa-submit-button").click()
    cy.get("#qa-toast-error").should("exist")
  });

});
