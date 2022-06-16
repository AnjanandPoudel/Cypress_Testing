
describe('My First System',()=>{
    let menuItem="softdrinks";
    let menuDescription="NewDrinks is added";
    let tableToSearch="table1";
    let customerToSearch="anubhav";
    let staffToSearch="anuvab";

    

    it('Menu creation checking',()=>{
        cy.visit('https://app.restrox.co/Restrox');
        // cy.contains('type').click();
        
        cy.url()
        .should('include','/login');

        cy.get('[name=loginEmail]')
        .type('bishnu.blacktech@gmail.com')
        .should('have.value',"bishnu.blacktech@gmail.com")

        cy.get('[name=password]')
        .type('12345678')
        .should('have.value',"12345678")

        cy.xpath('//*[@id="root"]/div[1]/div/div/div/div/div/div/div/form/div[4]/button').click()

    // Gone to Restrox
        cy.url().should('include','/Restrox');
        cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click()        // Arrange -setup initial qpp state
        // visit a web page
        // query for an element
        // Act - take an action
        //  interact - make an assertion/claim/
        // - make an assertion about page content  
        // cy.pause();
        // cy.intercept({
        //     method: 'GET',
        //     url: '',
        //     hostname: 'app-restrox-co.web.app',
        //   })
        // cy.wait('@createUser', { timeout: 10000});


 // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
                    //click POS
        for(let i=0;i<50;i++){
            cy.xpath('//*[@id="navcontainnavnav"]/li[2]/a').click()
            //Click Add order
            cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click()
            //search in POS
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/input').click()
            // first tables should be visible 
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div/div[1]').should('be.visible')
            //type tablename
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/input').type(tableToSearch).trigger('search')
            .then(()=>{
                //click on the first table Search
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div/div[1]').click()
            })
            //select dishes
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
            //select more dishes
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
            //confirm
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[2]/div/div/div[3]/div[2]/button[2]').click()
            // Are u sure? Confirm
            cy.xpath('/html/body/div[4]/div/div[1]/div/div/div/div[2]/button[2]').click()
            //Checkout
            cy.xpath('//*[@id="root"]/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/button').click()
            // Proceed payment
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[2]').click() // Proceed payment
            //Ok
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/button').click() 
            



        }

           
                
    })
    
    
})
