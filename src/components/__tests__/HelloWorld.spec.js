import { mount } from '@cypress/vue';
import TheWelcome from '../TheWelcome.vue';

describe('HelloWorld', () => {
  it('playground', () => {
    mount(TheWelcome, {});
  });

  it('renders 1 h3', () => {
    mount(TheWelcome, { props: { msg: 'Hello Cypress' } });
    cy.get(':nth-child(1) > .details > h3').should('exist');
  });
  it('renders 2 h3', () => {
    mount(TheWelcome, { props: { msg: 'Hello Cypress' } });
    cy.get(':nth-child(2) > .details > h3').should('exist');
  });
  it('renders 3 h3', () => {
    mount(TheWelcome, { props: { msg: 'Hello Cypress' } });
    cy.get(':nth-child(3) > .details > h3').should('exist');
  });
  it('renders 4 h3', () => {
    mount(TheWelcome, { props: { msg: 'Hello Cypress' } });
    cy.get(':nth-child(4) > .details > h3').should('exist');
  });
  it('renders 5 h3', () => {
    mount(TheWelcome, { props: { msg: 'Hello Cypress' } });
    cy.get(':nth-child(5) > .details > h3').should('exist');
  });
  it('renders 6 h3', () => {
    mount(TheWelcome, { props: { msg: 'Hello Cypress' } });
    cy.get(':nth-child(6) > .details > h3').should('not.exist');
  });
});
