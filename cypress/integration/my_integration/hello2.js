



describe('My First System',()=>{
    let menuItem="softdrinks";
    let menuDescription="NewDrinks is added";
    let tableToSearch="anjan";
    let customerToSearch="rajesh";
    let staffToSearch="anuvab";

    it('Does check if truth',()=>{
        expect(true).to.equals(true)
        // Arrange -setup initial qpp state
        // visit a web page
        // query for an element
        // Act - take an action
        //  interact - make an assertion/claim/
        // - make an assertion about page content  

        // cy.pause();

        cy.visit('https://app-restrox-co.web.app/');
        // cy.contains('type').click();
        
        cy.url()
        .should('include','/login');

        cy.get('[name=loginEmail]')
        .type('testblacktech2@gmail.com')
        .should('have.value',"testblacktech2@gmail.com")

        cy.get('[name=password]')
        .type('123456789')
        .should('have.value',"123456789")

        cy.xpath('//*[@id="root"]/div[1]/div/div/div/div/div/div/div/form/div[4]/button').click()

    // Gone to Restrox
        /* cy.url().should('include','/Restrox');
        cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click() */
    //Menu //Menu created Successfully
        cy.url().should('include','/digitalMenu');
        cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[1]/div/button/span').click()
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[4]/div[1]/div/input').type(menuItem).should('have.value',menuItem)
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[4]/div[2]/div/textarea').type(menuDescription).should('have.value',menuDescription)
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[5]/div/button').click()
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/button').click()

        
    // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
        //click POS
        cy.xpath('//*[@id="navcontainnavnav"]/li[2]/a').click()
        //Click Add order
        cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click()
        //search in POS
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/input').click()
        // first tables should be visible 
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div/div[1]').should('be.visible')
        //type tablename
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/input').type(tableToSearch).should('have.value',tableToSearch);
        //click on the first table Search
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div/div[1]').click()
        //select dishes
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
        //select more dishes
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
        //confirm
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[2]/div/div/div[3]/div[2]/button[2]').click()
        // Are u sure? Confirm
        cy.xpath('/html/body/div[4]/div/div[6]/button[1]').click()
        //Checkout
        cy.xpath('//*[@id="root"]/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/button').click()
        // Proceed payment
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[2]').click() // Proceed payment
        //Ok
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/button').click() 

        
    
    // For POS, AddOrder then Search Customer and AddDishes/Order and Checkout
        //click POS
        cy.xpath('//*[@id="navcontainnavnav"]/li[2]/a').click()
        //Click Add order
        cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click()
        //Click Customer
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[1]/div/button[2]').click()
        //search in Customer/Pos
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').click()
        // first tables should be visible 
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').should('be.visible')
        //type tablename
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').type(customerToSearch).should('have.value',customerToSearch);
        //click on the first table Search
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').click()
        //select dishes
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
        //select more dishes
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
        //confirm
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[2]/div/div/div[3]/div[2]/button[2]').click()
        // Are u sure? Confirm
        cy.xpath('/html/body/div[4]/div/div[6]/button[1]').click()
        //Checkout
        cy.xpath('//*[@id="root"]/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/button').click()
        // Proceed payment
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[2]').click() // Proceed payment
        //Ok
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/button').click() 

         
    
    // For POS, AddOrder then Search Staff and AddDishes/Order and Checkout
        //click POS
        cy.xpath('//*[@id="navcontainnavnav"]/li[2]/a').click()
        //Click Add order
        cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click()
        //Click Staff
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[1]/div/button[3]').click();
        //search in Staff/Pos
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').click()
        // first tables should be visible 
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').should('be.visible')
        //type tablename
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').type(staffToSearch).should('have.value',staffToSearch,3300);
        //click on the first table Search
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').should('be.visible')

        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').click()
        //select dishes
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
        //select more dishes
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
        //confirm
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[2]/div/div/div[3]/div[2]/button[2]').click()
        // Are u sure? Confirm
        cy.xpath('/html/body/div[4]/div/div[6]/button[1]').click()
        //Checkout
        cy.xpath('//*[@id="root"]/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/button').click()
        // Proceed payment
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[2]').click() // Proceed payment
        //Ok
        cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/button').click() 

        
    

    })
})





