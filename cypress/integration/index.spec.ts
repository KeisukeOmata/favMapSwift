describe('Root page testing', () => {
  it('The brand name is "SKPISM"', () => {
    cy.visit('/')
    cy.title().should('include', 'SKPISM')
  })
})
