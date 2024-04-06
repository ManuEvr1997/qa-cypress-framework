describe('Login / Log-out', () => {
    it('CP 002: FE | Login ', () => {
        cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > div > div:nth-child(2) > input').type('Admin');
        cy.get(':nth-child(3) > div > div:nth-child(2) > input').type('Admin123');
        cy.get('.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click();
    });
   it('CP 003: FE | Log out', () => {
       cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.get(':nth-child(2) > div > div:nth-child(2) > input').type('Admin');
       cy.get(':nth-child(3) > div > div:nth-child(2) > input').type('Admin123');
       cy.get('.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click();
       cy.get('.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > span').click();
       cy.get('.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > ul > li:nth-child(4) > a').click();
      
    });
    it('CP 004: FE | Forget your password? ', () => {
      cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('.orangehrm-login-forgot > p').click();
      cy.get('.oxd-form-row > div > div:nth-child(2) > input').type('eveg7719@gmail.com');
      cy.get('.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset').click();
  });
  it('CP 005: FE | Add a Rol ', () => {
    cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(1) > a').click();
    cy.get(':nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i').type('Admin');
    cy.get(':nth-child(1) > div > div:nth-child(3) > div > div:nth-child(2) > div > div').type('Enabled');
    cy.get(':nth-child(2) > input').type('admin123');
    cy.get(':nth-child(3) > div > div > input').type('Luis');
    cy.get(':nth-child(4) > div > div:nth-child(2) > input').type('Lucho24');
    cy.get(':nth-child(2) > div > div:nth-child(2) > input').type('admin123');
    cy.get('oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();    
   
  });
});
