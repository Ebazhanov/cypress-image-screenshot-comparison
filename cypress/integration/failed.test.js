describe('Visual regression tests', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('should compare default screenshot on home page', () => {
        cy.matchImageSnapshot();
    });
});
