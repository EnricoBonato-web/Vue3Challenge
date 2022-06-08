import LocalStorageVar from '../../src/type/LocalStorageVar';
import { FormattData } from './../../src/type/UtilityFunctions';
describe('TheWelcome page load test', () => {
  it('Successfully loads', () => {
    cy.visit('/expense');
  });
  it('Empty Local Storage', () => {
    cy.visit('/expense');
    expect(localStorage.getItem(LocalStorageVar.TRIPS)).null;
    expect(localStorage.getItem(LocalStorageVar.EXPENSES)).null;
  });
  it('Disabled Buttons', () => {
    cy.visit('/expense');
    cy.get('.control-container > :nth-child(1)').should('be.disabled');
    cy.get('.control-container > :nth-child(2)').should('be.disabled');
    cy.get('.control-container > :nth-child(3)').should('be.disabled');
  });
});
