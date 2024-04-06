describe('validate differents posible test scenarios about user feature', () => {
        it("GET - all users", () => {
        cy.request("GET", "https://api.escuelajs.co/api/v1/users").should((response) => {
          expect(response.status).to.eq(200);
        });
      });

      it("POST API testing Using Cypress API Plugin", () => {
        cy.request("POST", "https://api.escuelajs.co/api/v1/users", {
          name: "Nicolas",
          email: "nico@gmail.com",
          password: "12345",
          avatar: "https://api.lorem.space/image/face?w=640&h=480",
        }).should((response) => {
          expect(response.status).to.eq(201);
        });
     });
     it("PUT - API testing Using Flip Plugin", () => {
        cy.request("PUT", "https://api.escuelajs.co/api/v1/users/104", {name: "Sandra"}).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name','Sandra')//true
      });
    });
});
