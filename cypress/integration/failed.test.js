describe('Visual regression tests', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('should', () => {
        cy.matchImageSnapshot();
    });
});
