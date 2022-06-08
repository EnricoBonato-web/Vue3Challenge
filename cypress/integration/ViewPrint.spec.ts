import LocalStorageVar from '../../src/type/LocalStorageVar';
import { FormattData } from './../../src/type/UtilityFunctions';
import ExampleTrip from '../../src/components/trip/ExampleTrip';
import ExampleExpense from '../../src/components/expenses/ExampleExpense';

describe('View and Print Tests', () => {
  it('Successfully loads', () => {
    cy.visit('/monthlyrecap');
  });
  it('Empty Local Storage', () => {
    cy.visit('/monthlyrecap');
    expect(localStorage.getItem(LocalStorageVar.TRIPS)).null;
    expect(localStorage.getItem(LocalStorageVar.EXPENSES)).null;
  });
  it('Error shown', () => {
    cy.visit('/monthlyrecap');
    cy.get('.error').should('be.visible');
  });
  it('Data shown', () => {
    cy.visit('/monthlyrecap');
    localStorage.setItem(LocalStorageVar.TRIPS, JSON.stringify(ExampleTrip));
    localStorage.setItem(LocalStorageVar.EXPENSES, JSON.stringify(ExampleExpense));
    cy.get('.error').should('not.exist');
  });
  it('Data shown', () => {
    cy.visit('/monthlyrecap');
    localStorage.setItem(LocalStorageVar.TRIPS, JSON.stringify(ExampleTrip));
    localStorage.setItem(LocalStorageVar.EXPENSES, JSON.stringify(ExampleExpense));
    cy.get('.error').should('not.exist');
  });
  it('Print', () => {
    cy.visit('/monthlyrecap');
    cy.get('button')
      .click()
      .then(() => {
        const downloadsFolder = Cypress.config('downloadsFolder');
      });
    localStorage.setItem(LocalStorageVar.TRIPS, JSON.stringify(ExampleTrip));
    localStorage.setItem(LocalStorageVar.EXPENSES, JSON.stringify(ExampleExpense));
    cy.get('.error').should('not.exist');
  });
});
