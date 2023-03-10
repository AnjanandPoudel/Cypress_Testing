import { loginFunctionGlobal } from "./a2_LoginSystem.cy";
import { RowLen } from "./EXCEL.cy";

let rowsLength=1;
const PromiseResolver=async()=>{
    let rows=await RowLen()
    console.log(rows)
    rowsLength=rows.length
}

// cy.get(':nth-child(3) > .mt-2')
const AddOrderFunction=(classesName,NameofTask)=>{
        it(`${NameofTask}`+'Table Add Order :For POS, AddOrder then Search Tables and AddDishes/Order and Checkout',()=>{
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength; i++){
            // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
            //click POS
            cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[2]/a').click({force: true})
            //Click Add order
            cy.xpath(`${classesName}`).click({force: true})
            //search in POS
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/input').click({force: true})
            // first tables should be visible 
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div/div[1]').should('be.visible')
            //type tablename
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/input').type(data.rows[i].tableToSearch).trigger('search')
            .then(()=>{
                //click on the first table Search
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/div/div[1]').click()
            })
            //select dishes
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
            //confirm
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[2]/div/div/div[3]/div[2]/button[2]').click()
            // Are u sure? Confirm
            cy.xpath('/html/body/div[4]/div/div[1]/div/div/div/div[2]/button[2]').click()
            //Checkout
            cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/button').click()
            // Proceed payment
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[1]').click() // Proceed payment
            //Ok
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div/div[2]/div[1]/button').click() 
            
            cy.wait(500)
         }
         })
    })
    

    
    it(`${NameofTask}`+'Customer Add Order :For POS, AddOrder then Search Customer and AddDishes/Order and Checkout',()=>{
// For POS, AddOrder then Search Customer and AddDishes/Order and Checkout

        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength; i++){

            //click POS
            cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[2]/a').click({force: true})
            //Click Add order
            cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click({force: true})
            //Click Customer
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[1]/div/button[2]').click({force: true})
            //search in Customer/Pos
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').click()
            // first tables should be visible 
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').should('be.visible')
            //type tablename
            cy.wait(100)
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').type(data.rows[i].customerToSearch).then(()=>{
                    //click on the first table Search
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').click()

            })
            //select dishes
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[2]/div/div/div[3]/div[2]/button[2]').click()
            // Are u sure? Confirm
            cy.xpath('/html/body/div[4]/div/div[1]/div/div/div/div[2]/button[2]').click()
            //Checkout
            cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/button').click()
            // Proceed payment
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[1]').click() // Proceed payment
            //Ok
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div/div[2]/div[1]/button').click() 
            
            cy.wait(500)
        }
        })
   
    })
    


    it(`${NameofTask}`+'Staff Add Order, For POS, AddOrder then Search Staff and AddDishes/Order and Checkout',()=>{
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength; i++){
            // For POS, AddOrder then Search Staff and AddDishes/Order and Checkout
            //click POS
            cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[2]/a').click({force: true})
            //Click Add order
            cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click({force: true})
            //Click Customer
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[1]/div/button[2]').click({force: true})
            //Click Staff
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[1]/div/button[3]').click();
            //search in Staff/Pos
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').click()
            // first tables should be visible 
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').should('be.visible')
            //type tablename
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').type(data.rows[i].staffToSearch).trigger('search')
            // cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[3]/input').type(staffToSearch).should('have.value',staffToSearch);
            //click on the first table Search
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]').click()
            //select dishes
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div/div/div[2]/div[2]/div[1]/span[1]').click()
            //confirm
            cy.xpath('/html/body/div[3]/div/div[1]/div/div/div/div[2]/div/div[2]/div/div/div[3]/div[2]/button[2]').click()
            // Are u sure? Confirm
            cy.xpath('/html/body/div[4]/div/div[1]/div/div/div/div[2]/button[2]').click()
            //Checkout
            cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/button').click()
            // Proceed payment
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/button[1]').click() // Proceed payment
            //Ok
            cy.xpath('/html/body/div[2]/div/div[1]/div/div/div/div[2]/div[1]/button').click() 
            
            cy.wait(500)
            }
        })
    })

    


    it(`${NameofTask}`+'Reservation Add Order :For POS, AddOrder then Search Staff and Add Reservation and Checkout',()=>{
        // For POS, AddOrder then Search Staff and Add Reservation and Checkout
         //click POS
        cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[2]/a').click({force: true})
        //Click Add order
        cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]').click()
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


   
}
  

const OptionsButtonInOrder = ()=>{

    it('Drafts here',()=>{
         //click order
        cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[2]/a').click()
        //options
        cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div/div/div[1]/div/div[2]/div[3]/div/div/div/button').click()
        //draft
        cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div/div/div[1]/div/div[2]/div[3]/div/div/div/div/div/div[2]/div[1]/button').click()
        cy.wait(500)
   })

    it('History',()=>{
         //click POS
        cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[2]/a').click()
        //Click options order
        cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div/div/div[1]/div/div[2]/div[3]/div/div/div/button').click()

        cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div/div/div[1]/div/div[2]/div[3]/div/div/div/div/div/div[2]/div[2]/button').click()

      
   })

    it('Summary',()=>{
         //click order
        cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[2]/a').click()
        //Click options order
        cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div/div/div[1]/div/div[2]/div[3]/div/div/div/button').click()
        cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div/div/div[1]/div/div[2]/div[3]/div/div/div/div/div/div[2]/div[3]/button').click()
   })
}



describe('POS System',()=>{
    let tableToSearch="Table";
    let customerToSearch="amrit";
    let staffToSearch="Anjan";
    loginFunctionGlobal()
    afterEach(()=>{
        cy.wait(1000)

    })

    it('RowsLength Excel Import',()=>{
        PromiseResolver()
    })

    AddOrderFunction('/html/body/div/div[1]/div[2]/div[3]/div/div/div[1]/div/div[2]/div[3]/button[2]','Clicking AddOrder====')
    // AddOrderFunction(':nth-child(3) > .mt-2','Clicking Place Order====')

    OptionsButtonInOrder()

    it('Quick Order',()=>{
        // For POS, AddOrder then Search Staff and Add Reservation and Checkout
         //click POS
        cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[2]/a').click()
        //Click quick order
        cy.get('.pos_rightButton__gZiN_ > .btn-secondary').click()
        // plus
        for(let i=1; i<5;i++){
            cy.get(`:nth-child(${i}) > :nth-child(1) > :nth-child(1) > .ItemCard_cardQuickOrder__3Rn_q > .ItemCard_cardDetailsContainer__6xpjf > .rc-input-number > .rc-input-number-handler-wrap > .rc-input-number-handler-up > svg`).click()
        }
        //confirm order
        cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div[3]/div[2]/button[2]').click()
        //quick checkout
        cy.get('.PaymentModal_footer__1Y0t2 > .btn-primary').click()
        //save it
        cy.get('.CheckoutBillModal_saveButton__322vw > .btn').click() 
        cy.wait(500)

   }) 


})

