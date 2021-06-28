import 'cypress-localstorage-commands'
import { categories } from '../../src/lib/categories'

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

describe('Main testing', () => {
  it('Categories test', () => {
    cy.get('main').get(`[aria-label="${categories[0].name}を表示する"]`).click()
    cy.focused().should('have.text', `${categories[0].name}`)

    cy.get('main').get(`[aria-label="${categories[1].name}を表示する"]`).click()
    cy.focused().should('have.text', `${categories[1].name}`)

    cy.get('main').get(`[aria-label="${categories[2].name}を表示する"]`).click()
    cy.focused().should('have.text', `${categories[2].name}`)

    cy.get('main').get(`[aria-label="${categories[3].name}を表示する"]`).click()
    cy.focused().should('have.text', `${categories[3].name}`)

    cy.get('main').get(`[aria-label="${categories[4].name}を表示する"]`).click()
    cy.focused().should('have.text', `${categories[4].name}`)

    cy.get('main').get(`[aria-label="${categories[5].name}を表示する"]`).click()
    cy.focused().should('have.text', `${categories[5].name}`)

    cy.get('main').get(`[aria-label="${categories[6].name}を表示する"]`).click()
    cy.focused().should('have.text', `${categories[6].name}`)

    cy.get('main').get(`[aria-label="${categories[7].name}を表示する"]`).click()
    cy.focused().should('have.text', `${categories[7].name}`)

    cy.get('main').get(`[aria-label="${categories[8].name}を表示する"]`).click()
    cy.focused().should('have.text', `${categories[8].name}`)
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
