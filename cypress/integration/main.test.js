/* eslint-disable no-undef */
describe("Page and navigation works", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  const arrayOfChoices = Array(30)
    .fill(0)
    .map(() => (Math.random() > 0.5 ? "Less" : "More"))
  console.log(arrayOfChoices)

  it("successfully loads a page", () => {
    cy.title().should("include", "Dice App")
  })
  //
  it("starts a new game and it should take 30 rounds of game", () => {
    cy.findAllByText("New Game").click()
    // since it is a new game the score should be 0
    cy.get("output").contains("0")

    arrayOfChoices.forEach((choice) => {
      // User can bet for 30 rounds (business requirement
      cy.findAllByText(choice).click()
    })
    // The all rounds are done
    cy.get("h2").contains("30/30")
  })
})
