import LocalStorageVar from '../../src/type/LocalStorageVar';
describe('TheWelcome page load test', () => {
  it('Successfully loads', () => {
    cy.visit('/trip');
  });
  it('Empty Local Storage', () => {
    cy.visit('/trip');
    expect(localStorage.getItem(LocalStorageVar.TRIPS)).null;
    expect(localStorage.getItem(LocalStorageVar.EXPENSES)).null;
  });
  it('Disabled Buttons', () => {
    cy.visit('/trip');
    cy.get('.control-container > :nth-child(1)').should('be.disabled');
    cy.get('.control-container > :nth-child(2)').should('be.disabled');
    cy.get('.control-container > :nth-child(3)').should('be.disabled');
  });
  it('Can Enter Text', () => {
    cy.visit('/trip');
    cy.get('input').type('Test');

    cy.get('.control-container > :nth-child(3)').should('not.be.disabled');
  });
  it('Next abled', () => {
    cy.visit('/trip');
    cy.get('input').type('Test');
    cy.get('.control-container > :nth-child(3)').should('not.be.disabled');
  });
  it('Error shown', () => {
    cy.visit('/trip');
    cy.get('input').type('e');
    cy.get('.control-container > :nth-child(3)')
      .click()
      .then(() => {
        cy.get('.error-container > div').should('be.visible');
      });
  });

  it('Error gone', () => {
    cy.visit('/trip');
    cy.get('input').type('t');
    cy.get('.control-container > :nth-child(3)')
      .click()
      .then(() => {
        cy.get('input').type('est');
        cy.get('.error-container > div').should('not.exist');
      });
  });
  it('Start Data shown', () => {
    cy.visit('/trip');
    cy.get('input').type('test');
    cy.get('.control-container > :nth-child(3)')
      .click()
      .then(() => {
        cy.get('.input-component').contains('Start time');
        cy.get('.error-container > div').should('not.exist');
      });
  });
});
