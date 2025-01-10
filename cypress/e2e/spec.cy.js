describe('entrar no yt spec', () => {
  it('teste no yt', () => {
    cy.visit('https://www.youtube.com')


    cy.get('.ytSearchboxComponentInput').type('saiko')
    cy.get('.ytSearchboxComponentSearchButton > yt-icon > .yt-icon-shape > div').click()
    cy.get(':nth-child(1) > #content-section > #info-section > #main-link > #info > #channel-title > #container > #text-container > #text').click()
    cy.get('[tab-title="Vídeos"] > .yt-tab-shape-wiz__tab').click()  })
})