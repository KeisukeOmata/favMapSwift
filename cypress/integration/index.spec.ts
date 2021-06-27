import 'cypress-localstorage-commands'

beforeEach(() => {
  cy.visit('/')
})

describe('Header testing', () => {
  it('Brand name test', () => {
    cy.get('header').get('[aria-label="このサイトの名前"]').click()
    cy.url().should('include', '/')
    cy.focused().should('have.id', 'head')
  })
  it('Items test', () => {
    cy.get('header').contains('Items').click()
    cy.url().should('include', '/')
    cy.focused().should('have.id', 'head')
  })
  it('About test', () => {
    cy.get('header').contains('About').click()
    cy.url().should('include', '/about')
    cy.focused().should('have.id', 'head')
  })
  it('Dark mode test', () => {
    cy.getLocalStorage('theme').should('equal', null)
    cy.get('header').get('[aria-label="ダークモードとライトモードを入れ替える"]').click()
    cy.getLocalStorage('theme').should('equal', 'dark')
    cy.get('header').get('[aria-label="ダークモードとライトモードを入れ替える"]').click()
    cy.getLocalStorage('theme').should('equal', 'light')
  })
  it('BAG test', () => {
    cy.get('header').contains('BAG').click()
    cy.url().should('include', '/cart')
    cy.focused().should('have.id', 'head')
  })
})

describe('Footer testing', () => {
  it('Terms test', () => {
    cy.get('footer').contains('利用規約').click()
    cy.url().should('include', '/terms')
    cy.focused().should('have.id', 'head')
  })
  it('Privacy test', () => {
    cy.get('footer').contains('プライバシーポリシー').click()
    cy.url().should('include', '/privacy')
    cy.focused().should('have.id', 'head')
  })
  it('Legal test', () => {
    cy.get('footer').contains('特定商取引法に基づく表示').click()
    cy.url().should('include', '/legal')
    cy.focused().should('have.id', 'head')
  })
})
