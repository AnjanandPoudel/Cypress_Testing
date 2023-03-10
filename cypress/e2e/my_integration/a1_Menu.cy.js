import { loginFunctionGlobal } from "./a2_LoginSystem.cy";
import { RowLen } from "./EXCEL.cy";

let rowsLength=1;
const PromiseResolver=async()=>{
    let rows=await RowLen()
    console.log(rows)
    rowsLength=rows.length
}

describe('Menu System',()=>{
    loginFunctionGlobal()
    it('Inside Menu, In All Dishes, a dish is created',()=>{
        PromiseResolver()
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<1; i++){
                cy.wait(200)
                cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[4]/a/span').click()
                cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div[1]/div/div/div/div[1]/a').click()
                cy.get('[href="/apps/management/menuManagement/allDishes"]')                //All dishes
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


    
//     it('Inside Menu, In All Dishes, a dish is created',()=>{
//         PromiseResolver()
//         cy.pause()


// // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
//         //click POS
//         cy.fixture('xlsxData').then((data)=>{

//             for(let i=0; i<rowsLength; i++){
//                 cy.wait(200)
//                 cy.xpath('//*[@id="navcontainnavnav"]/li[4]/a').click().wait(200)
//                 //All dishes
//                 cy.get('#root > div.wrapper.vertical-layout.navbar-sticky.footer-hidden.vertical-menu-modern.menu-expanded > div.app-content.content.overflow-hidden.todo-application > div.content-area-wrapper > div.sidebar-left > div > div > div > div.list-group > a.active.list-group-item-action.list-group-item').click();
//                 //create dishes
//                 cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div[1]/div[1]/div/div[1]/div/button').click();
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[3]/div/input').type(data.rows[i].newDishName);
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[4]/div[1]/input').type(data.rows[i].dishPrice);
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[4]/div[2]/input').type(data.rows[i].Discount);
//                 //search menu
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[1]/div/div[1]/div[1]/div[2]').type(data.rows[i].selectedMenuforDish);
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[1]/div/div[2]/div/div[1]').click() // select first menu

//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[2]/div/div[1]/div[1]/div[2]').type(data.rows[i].selectedCategoryforDish)
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[2]/div/div[2]/div').click(); // select category

//                 //description
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[6]/div/textarea').type(data.rows[i].newDishDescp);
//                 // click submit
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/button').click();
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/button').click();
                
//                 cy.wait(1000)
                
//             }
//         })
//     })


//     it('Menu-> Category is created ',()=>{
//     // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
//         //click POS
//         cy.fixture('xlsxData').then((data)=>{
//             for(let i=0; i<rowsLength; i++){
               
//                 cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[4]/a').click()
//                 cy.url().should('include','/digitalMenu');
//                 //All category
//                 cy.xpath('//*[@id="root"]/div[1]/div[2]/div[3]/div[1]/div/div/div/div[2]/a[2]').click();
//                 //create category
//                 cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[1]/div/button/span').click();

//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[2]/div[1]/input').type(data.rows[i].categoryName);
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[3]/div/textarea').type(data.rows[i].categoryDescription);
//                 // click submit
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[4]/div/button').click();
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/button').click();
                
//                 cy.wait(1000)
//             }
//         })
//     })


// it('Menu-> Category is Edited using Contains',()=>{
//     // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
//         //click POS
//         cy.fixture('xlsxData').then((data)=>{
//             for(let i=0; i<rowsLength; i++){
               
//                 cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[4]/a').click({force:true})
//                 cy.url().should('include','/digitalMenu');
//                 //Menu-> Category
//                 cy.xpath('//*[@id="root"]/div[1]/div[2]/div[3]/div[1]/div/div/div/div[2]/a[2]').click();
//                 // category Hover
//                 // cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[1]/img').realHover('mouse');
//                 cy.wait(1000);
//                 //Search
//                 cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[1]/div/div/input').type(data.rows[i].categoryToEdit,{force:true})
//                 cy.wait(500)
//                 //Hover
                
//                 cy.contains(data.rows[i].categoryToEdit).first().realHover()
//                 //Edit category
//                 cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/div/button[2]/span').click({force:true});
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[2]/input').clear()
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[2]/input').type(data.rows[i].editCategoryName)
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[3]/textarea').clear()
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[3]/textarea').type(data.rows[i].editCategoryDescp)
//                 cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/span/button').click()
//                 cy.wait(1000)
//             }
//         })
//     })


// it('Menu-> Category is Deleted using Contains',()=>{
//     // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
//         //click POS
//         cy.fixture('xlsxData').then((data)=>{
//             for(let i=0; i<rowsLength; i++){
                
//                 cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[4]/a').click()
//                 cy.url().should('include','/digitalMenu');
//                 //Menu-> Category
//                 cy.xpath('//*[@id="root"]/div[1]/div[2]/div[3]/div[1]/div/div/div/div[2]/a[2]').click();
        
//                 // Click options button
//                 cy.wait(1000);
//                 cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[1]/div/div/input').type(data.rows[i].categoryToDelete)
//                 cy.wait(500)
//                 cy.contains(data.rows[i].categoryToDelete).first().realHover()
        
//                 //Delete category
//                 cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/div/button[3]/span').click({force:true});
//                 //Are you sure?
//                 cy.xpath('/html/body/div[2]/div/div[6]/button[1]').click();

//                 cy.wait(1000)
//             }
//         })
//     })

       
    // it('Menu-> Category is Clicked ',()=>{
    // // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
    //     //click POS
    //     cy.fixture('xlsxData').then((data)=>{
    //         for(let i=0; i<rowsLength; i++){
               
    //             cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[4]/a').click()
    //             cy.url().should('include','/digitalMenu');
    //             //Menu-> Category
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[1]/div/div/div/div[2]/a[3]/span').click();
    //             // category click
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[1]/img').click();

              
                
    //             cy.wait(1000)
    //         }
    //     })
    // })



   
    // it('Menu-> Category is edited ',()=>{
    // // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
    //     //click POS
    //     cy.fixture('xlsxData').then((data)=>{
    //         for(let i=0; i<rowsLength; i++){
               
    //             cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[4]/a').click()
    //             cy.url().should('include','/digitalMenu');
    //             //Menu-> Category
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[1]/div/div/div/div[2]/a[3]/span').click();
                
    //             // category Hover

    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[1]/img').realHover('mouse');
    //             // Click options button
    //             cy.wait(1000);
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/span').should('be.visible')
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/span').click({force:true});
                
    //             //Edit category
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/div/button[2]/span').click({force:true});

    //             cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[2]/input').clear()
    //             cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[2]/input').type(updatedCategoryName)
    //             cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[3]/textarea').clear()
    //             cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[3]/textarea').type(updatedCategoryDescription)
    //             cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/span/button').click()
    //             cy.wait(1000)
    //         }
    //     })
    // })

   
    // it('Menu-> Category is Deleted ',()=>{
    // // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
    //     //click POS
    //     cy.fixture('xlsxData').then((data)=>{
    //         for(let i=0; i<rowsLength; i++){
               
    //             cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[4]/a').click()
    //             cy.url().should('include','/digitalMenu');
    //             //Menu-> Category
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[1]/div/div/div/div[2]/a[3]/span').click();
    //             // category Hover
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[1]/img').realHover('mouse');
    //             // Click options button
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/span').should('be.visible')
    //             cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/span').click({force:true});
        
    //            //Delete category
    //            cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div[2]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div/div/button[3]/span').click({force:true});
              
                
    //             cy.wait(1000)
    //         }
    //     })
    // })




/*    
    // it('Menu-> QR code creation ',()=>{
    
    //     cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[4]/a').click()
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
    // }) */
})






