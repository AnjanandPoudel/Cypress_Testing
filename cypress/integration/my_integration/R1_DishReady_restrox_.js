

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
    })

    
    it('Menu Creation Here',()=>{
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength;i++){
                    //Menu //Menu created Successfully
                cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click()
                cy.url().should('include','/digitalMenu');
                //create memnu
                cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[1]/div/button/span').click()
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[4]/div[1]/div/input').type(data.rows[i].menuItem).should('have.value',data.rows[i].menuItem)
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[4]/div[2]/div/textarea').type(data.rows[i].menuDescription).should('have.value',data.rows[i].menuDescription)
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[5]/div/button').click()
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/button').click()
            }
        })
    })
 
 
   
    it('Inside Menu, In All Dishes, a dish is searched then updated and deleted',()=>{
        // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
        //click POS
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength; i++){
                cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click()
                cy.url().should('include','/digitalMenu');
                //All dishes
                cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div[1]/div/div/div/div[2]/a[2]').click();
                //Search dishes
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div[1]/div[1]/div/div[1]/div/div/input').click();
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div[1]/div[1]/div/div[1]/div/div/input').type(data.rows[i].dishToSearch);   
                //Click actions
                cy.wait(1000)
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div[1]/div[2]/div/div/div/div/div[2]/div[2]/div[8]/div/div/span').click()
                //Click Details
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div[1]/div[2]/div/div/div/div/div[2]/div[2]/div[8]/div/div/div/button/span').should('be.visible').click()
                //Change Price
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[3]/input').type(data.rows[i].dishPrice);
                //Update
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/span/button').click()
                //Click actions
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div[1]/div[2]/div/div/div/div/div[2]/div[2]/div[8]/div/div/span').click()
                //Click Delete
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div[1]/div[2]/div/div/div/div/div[2]/div[2]/div[8]/div/div/div/a/span').should('be.visible').click()
                //Yes delete it
                cy.xpath('/html/body/div[2]/div/div[6]/button[1]').click()
                cy.wait(1000);

            }
        })
    })



    it('Inside Menu, In All Dishes, a dish is created',()=>{
// For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
        //click POS
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength; i++){
                cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click()
                cy.url().should('include','/digitalMenu');
                //All dishes
                cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div[1]/div/div/div/div[2]/a[2]').click();
                //create dishes
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div[1]/div[1]/div/div[1]/div/button').click();
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[3]/div/input').type(data.rows[i].newDishName);
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[4]/div[1]/input').type(data.rows[i].dishPrice);
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[4]/div[2]/input').type(data.rows[i].Discount);
                //search menu
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[1]/div/div[1]/div[1]/div[2]').type(data.rows[i].selectedMenuforDish);
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[1]/div/div[2]/div/div[1]').click() // select first menu

                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]').type(data.rows[i].selectedCategoryforDish)
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[2]/div/div[2]/div').click(); // select category

                //description
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[6]/div/textarea').type(data.rows[i].newDishDescp);
                // click submit
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/button').click();
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/button').click();
                
                cy.wait(1000)
                
            }
        })
    })




   
    it('Menu-> Category is created ',()=>{
    // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
        //click POS
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength; i++){
               
                cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click()
                cy.url().should('include','/digitalMenu');
                //All category
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[1]/div/div/div/div[2]/a[3]/span').click();
                //create category
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[1]/div/button/span').click();

                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[2]/div[1]/input').type(data.rows[i].categoryName);
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[3]/div/textarea').type(data.rows[i].categoryDescription);
                // click submit
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[4]/div/button').click();
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/button').click();
                
                cy.wait(1000)
            }
        })
    })


    

   
    it('Menu-> Category is Clicked ',()=>{
    // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
        //click POS
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength; i++){
               
                cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click()
                cy.url().should('include','/digitalMenu');
                //Menu-> Category
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[1]/div/div/div/div[2]/a[3]/span').click();
                // category click
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[1]/img').click();

              
                
                cy.wait(1000)
            }
        })
    })

   
    // it('Menu-> Category is edited ',()=>{
    // // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
    //     //click POS
    //     cy.fixture('xlsxData').then((data)=>{
    //         for(let i=0; i<rowsLength; i++){
               
    //             cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click()
    //             cy.url().should('include','/digitalMenu');
    //             //Menu-> Category
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[1]/div/div/div/div[2]/a[3]/span').click();
    //             // category click
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[1]/img').trigger('mouseover');
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/span/svg').should('be.visible')
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/span/svg').click({force:true});

              
                
    //             cy.wait(1000)
    //         }
    //     })
    // })




   
    // it('Menu-> QR code creation ',()=>{
    
    //     cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click()
    //     cy.url().should('include','/digitalMenu');

    //     cy.fixture('xlsxData').then((data)=>{
    //             //QR code
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div[2]/div[1]').should('be.visible')
    //             cy.wait(1000)

    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[1]/div/div/div/div[2]/a[4]').click();
    //             //request qr code
    //             cy.wait(1000)

    //             cy.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[1]/div/button').click();
    //             cy.wait(100)
    //             cy.xpath('/html/body/div[2]/div/div[6]/button[1]').click();
    //             cy.wait(1000)
    //     })
    // })

   
})






