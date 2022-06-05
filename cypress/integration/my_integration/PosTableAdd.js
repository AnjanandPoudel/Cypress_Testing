
describe('My First System',()=>{
    let menuItem="softdrinks";
    let menuDescription="NewDrinks is added";
    let tableToSearch="table";
    let customerToSearch="anubhav";
    let staffToSearch="anuvab";

    it('login and then add table',()=>{
        // cy.visit('https://app.restrox.co/Restrox');
        cy.visit('https://beta.restrox.co/login');
        // cy.contains('type').click();
        
        cy.url()
        .should('include','/login');

        cy.get('[name=loginEmail]')
        .type('testblacktech2@gmail.com')
        .should('have.value',"testblacktech2@gmail.com")

        cy.get('[name=password]')
        .type('123456789')
        .should('have.value',"123456789")

        cy.xpath('//*[@id="root"]/div[1]/div/div/div/div/div/div/div/form/div[4]/button').click();

    // Gone to Restrox
        cy.url().should('include','/Restrox');
        cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click();

        for(let i=23;i<100;i++){
            let searchTable=tableToSearch+'0'+i;

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
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/input').type(searchTable).trigger('search')
            .then(()=>{
                //click on the first table Search
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div/div[1]').click();
            })
            //select dishes
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
            
            //confirm
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[2]/div/div/div[3]/div[2]/button[2]').click()
            // Are u sure? Confirm
            cy.xpath('/html/body/div[4]/div/div[1]/div/div/div/div[2]/button[2]').click()
            //Checkout
            cy.xpath('//*[@id="root"]/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/button').click()
            // // Proceed payment
            // cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[2]').click() // Proceed payment
            // //Ok
            // cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/button').click()
            cy.wait(10);
        }
    })
})

