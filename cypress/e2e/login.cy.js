/// <reference types="Cypress" />

describe("login tests", () => {
it("login with unregistered user", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.get("a[href='/login']").click();
    cy.get("#email").type("random@email.com");
    cy.get("#password").type("auditeka1234");
    cy.get("button").click();
    cy.url().should("contain", "/login");

}) 

it("register witouth email adress provided", () =>{
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.get("a[href='/login']").click();
    cy.get("#password").type("auditeka1234");
    cy.get("button").click();
    cy.url().should("contain", "/login");

} )

})

    it("login with valid credentials", () =>  {
        cy.visit("https://gallery-app.vivifyideas.com/");
   cy.get(".nav-link").eq(1).click();
   cy.get("#email").type("milemilic@gmail.com");
   cy.get("#password").type("auditeka1234");
   cy.get("button").click();
    });


