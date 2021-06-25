import 'cypress-localstorage-commands'

describe('Header testing', () => {
  it('Brand name test', () => {
    cy.visit('/')
    cy.get('header').get('[aria-label="このサイトの名前"]').click()
    cy.url().should('include', '/')
  })
  it('Items test', () => {
    cy.visit('/')
    cy.get('header').contains('Items').click()
    cy.url().should('include', '/')
  })
  it('About test', () => {
    cy.visit('/')
    cy.get('header').contains('About').click()
    cy.url().should('include', '/about')
  })
  it('Dark mode test', () => {
    cy.visit('/')
    cy.getLocalStorage('theme').should('equal', null)
    cy.get('header').get('[aria-label="ダークモードとライトモードを入れ替える"]').click()
    cy.getLocalStorage('theme').should('equal', 'dark')
    cy.get('header').get('[aria-label="ダークモードとライトモードを入れ替える"]').click()
    cy.getLocalStorage('theme').should('equal', 'light')
  })
  it('BAG test', () => {
    cy.visit('/')
    cy.get('header').contains('BAG').click()
    cy.url().should('include', '/cart')
  })
})

describe('Footer testing', () => {
  it('Terms test', () => {
    cy.visit('/')
    cy.get('footer').contains('利用規約').click()
    cy.url().should('include', '/terms')
  })
  it('Privacy test', () => {
    cy.visit('/')
    cy.get('footer').contains('プライバシーポリシー').click()
    cy.url().should('include', '/privacy')
  })
  it('Legal test', () => {
    cy.visit('/')
    cy.get('footer').contains('特定商取引法に基づく表示').click()
    cy.url().should('include', '/legal')
  })
})
