import { EMPTY_ARR } from '@vue/shared';
import LocalStorageVar from '../../src/type/LocalStorageVar';
import ExampleTrip from '../../src/components/trip/ExampleTrip';
import ExampleExpense from '../../src/components/expenses/ExampleExpense';
import type BillType from './../../src/type/BillType';
describe('TheWelcome page load test', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('Empty Local Storage', () => {
    cy.visit('/');
    expect(localStorage.getItem(LocalStorageVar.TRIPS)).null;
    expect(localStorage.getItem(LocalStorageVar.EXPENSES)).null;
  });
  it('Add buttons active', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > button').should('not.be.disabled');
    cy.get(':nth-child(2) > button').should('not.be.disabled');
  });
  it('Remove button not active', () => {
    cy.visit('/');
    cy.get('[if="remove"] > button').should('be.disabled');
  });
});
describe('TheWelcome Buttons Test', () => {
  it('Add Dummy Data', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > button')
      .click()
      .then($btn => {
        expect(localStorage.getItem(LocalStorageVar.TRIPS)).not.null;
        expect(localStorage.getItem(LocalStorageVar.EXPENSES)).not.null;
        cy.get(':nth-child(1) > button').should('be.disabled');
        cy.get(':nth-child(2) > button').should('be.disabled');
        cy.get('[if="remove"] > button').should('not.be.disabled');
      });
  });

  it('Add Example Data', () => {
    cy.visit('/');
    cy.get(':nth-child(2) > button')
      .click()
      .then($btn => {
        expect(localStorage.getItem(LocalStorageVar.TRIPS)).not.null;
        expect(localStorage.getItem(LocalStorageVar.EXPENSES)).not.null;
        cy.get(':nth-child(1) > button').should('be.disabled');
        cy.get(':nth-child(2) > button').should('be.disabled');
        cy.get('[if="remove"] > button').should('not.be.disabled');
      });
  });
  it('Remove Data', () => {
    localStorage.setItem(LocalStorageVar.TRIPS, JSON.stringify(ExampleTrip));
    localStorage.setItem(LocalStorageVar.EXPENSES, JSON.stringify(ExampleExpense));
    cy.visit('/');
    cy.get(':nth-child(3) > button')
      .click()
      .then($btn => {
        expect(localStorage.getItem(LocalStorageVar.TRIPS)).equal('');
        expect(localStorage.getItem(LocalStorageVar.EXPENSES)).equal('');
        cy.get(':nth-child(1) > button').should('not.be.disabled');
        cy.get(':nth-child(2) > button').should('not.be.disabled');
        cy.get('[if="remove"] > button').should('be.disabled');
      });
  });
});
