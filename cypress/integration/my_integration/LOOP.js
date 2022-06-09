import {loginFunctionGlobal} from './a2_LoginSystem'


describe('My First System',()=>{
    let menuItem="softdrinks";
    let menuDescription="NewDrinks is added";
    let tableToSearch="table007";
    let customerToSearch="anubhav";
    let staffToSearch="anuvab";

    loginFunctionGlobal()


    it('Table Add Order :For POS, AddOrder then Search Tables and AddDishes/Order and Checkout',()=>{
    // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
        //click POS
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength;i++){
                cy.xpath('//*[@id="navcontainnavnav"]/li[2]/a').click()
                //Click Add order
                cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click()
                //search in POS
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/input').click()
                // first tables should be visible 
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div/div[1]').should('be.visible')
                //type tablename
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/input').type(data.rows[i].message).trigger('search')
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
                cy.wait(1000)
            }
        })
    })


})






