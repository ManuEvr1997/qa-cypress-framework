describe('Cart Feature', () => {
    it('TC-001: BE | Add new product to cart ', () => {
        cy.request("POST", "https://api.demoblaze.com/addtocart", {
        id: ""

        } 
    )
    });
}
);