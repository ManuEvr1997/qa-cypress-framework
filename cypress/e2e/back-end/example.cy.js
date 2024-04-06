describe('Entries feature', () => {
    it("TC-003: GET all entries", () => {
        cy.request("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            cy.validateSchema(getAllEntriesSchema, response.body);
            cy.log(JSON.stringify(response.body));
        });
    });
});
