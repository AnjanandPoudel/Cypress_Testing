

let rowsLength;
describe('My First System',()=>{
    let menuItem="softdrinks";
    let menuDescription="NewDrinks is added";
    let tableToSearch="table007";
    let customerToSearch="anubhav";
    let staffToSearch="anuvab";

    beforeEach('beforeEach',()=>{

        cy.task('readXlsx',{file:'cypress/fixtures/excelData.xlsx',sheet:"Sheet1"}).then((rows)=>{
            rowsLength=rows.length;
            cy.writeFile("cypress/fixtures/xlsxData.json",{rows})
          })

        cy.visit('https://app.restrox.co/Restrox');
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
        cy.url().should('include','/Restrox');
        cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click()
    })

    

    // it('Menu creation checking',()=>{
    //     expect(true).to.equals(true)
    //     // Arrange -setup initial qpp state
    //     // visit a web page
    //     // query for an element
    //     // Act - take an action
    //     //  interact - make an assertion/claim/
    //     // - make an assertion about page content  

    //     // cy.pause();

    //     // cy.intercept({
    //     //     method: 'GET',
    //     //     url: '',
    //     //     hostname: 'app-restrox-co.web.app',
    //     //   })

    //     // cy.wait('@createUser', { timeout: 10000});

 
    // //Menu //Menu created Successfully
    //     cy.url().should('include','/digitalMenu');
    //     cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[1]/div/button/span').click()
    //     cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[4]/div[1]/div/input').type(menuItem).should('have.value',menuItem)
    //     cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[4]/div[2]/div/textarea').type(menuDescription).should('have.value',menuDescription)
    //     cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[5]/div/button').click()
    //     cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/button').click()
        
    // })




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





    
    it('Customer Add Order :For POS, AddOrder then Search Customer and AddDishes/Order and Checkout',()=>{
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
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').type(customerToSearch).should('have.value',customerToSearch).trigger('search').then(()=>{
                //click on the first table Search
              cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div/div').click()
        //select dishes
        })
        //click on the first table Search
       
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
        cy.wait(3000)
        
   
    })
    





    

    it('Staff Add Order, For POS, AddOrder then Search Staff and AddDishes/Order and Checkout',()=>{
         // For POS, AddOrder then Search Staff and AddDishes/Order and Checkout
        //click POS
        cy.xpath('//*[@id="navcontainnavnav"]/li[2]/a').click()
        //Click Add order
        cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click()
        //Click Customer
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[1]/div/button[2]').click()
        //Click Staff
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[1]/div/button[3]').click();
        //search in Staff/Pos
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').click()
        // first tables should be visible 
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').should('be.visible')
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div[2]').should('be.visible')
        cy.wait(3000)
          //type tablename
          // cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').type(staffToSearch).should('have.value',staffToSearch);
          //click on the first table Search
          cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').click()
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
  
    })

    


    it('Reservation Add Order :For POS, AddOrder then Search Staff and Add Reservation and Checkout',()=>{
        // For POS, AddOrder then Search Staff and Add Reservation and Checkout
         //click POS
        cy.xpath('//*[@id="navcontainnavnav"]/li[2]/a').click()
        //Click Add order
        cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click()
        //Click Restaurant
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[1]/div/button[4]').click()
        //Type Name
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/div[1]/div/input').type("somethingName")
       // Contact details
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[4]/div/input[1]').type("123456789")
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[4]/div/input[2]').type("email@g.com")
       //address
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[5]/div/input').type("Address lekhnath")
       //Click/Choose Dates
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[7]/div/input').click()
       cy.xpath('/html/body/div[3]/div[2]/div/div[2]/div/span[29]').click()
       //Add Remarks
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[8]/div/textarea').type("remarksNothing")
       //Click proceed
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[9]/div/button').click()
     
     
   })



    it('Quick Order',()=>{
        // For POS, AddOrder then Search Staff and Add Reservation and Checkout
         //click POS
        cy.xpath('//*[@id="navcontainnavnav"]/li[2]/a').click()
        //Click Add order
        cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click()
        //Click Restaurant
        cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[1]/div/button[4]').click()
        //Type Name
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/div[1]/div/input').type("somethingName")
       // Contact details
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[4]/div/input[1]').type("123456789")
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[4]/div/input[2]').type("email@g.com")
       //address
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[5]/div/input').type("Address lekhnath")
       //Click/Choose Dates
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[7]/div/input').click()
       cy.xpath('/html/body/div[3]/div[2]/div/div[2]/div/span[31]').click()
       //Add Remarks
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[8]/div/textarea').type("remarksNothing")
       //Click proceed
       cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[9]/div/button').click()
     
     
   })
    



   
})






