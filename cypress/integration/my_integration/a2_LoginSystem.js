import { ReadExcel, RowLen } from "./EXCEL";
import { ExcelSystem } from "./EXCELPromiseResolver";

let rowsLength=0;
const PromiseResolver=async()=>{
    let rows=await RowLen()
    console.log(rows)
    rowsLength=rows.length
}

export const loginFunctionGlobal=()=>{
    before(() => {
        PromiseResolver()
        cy.visit('https://app.restrox.co');
        // cy.contains('type').click({force:true}).first();

        cy.url()
        .should('include','/login');

        cy.fixture('xlsxData').then((data)=>{
          cy.get('[name=loginEmail]')
          .type(data.rows[0].email)
  
          cy.get('[name=password]')
          .type(data.rows[0].password)
        })
        cy.xpath('//*[@id="root"]/div[1]/div/div/div/div/div/div/div/form/div[4]/button').click({force:true}).first()
        cy.wait(500)

    // Gone to Restrox
        cy.url().should('include','/Restrox').then(()=>{
            let token= (localStorage.getItem('token')||0)
            let userData= ( localStorage.getItem('userData') || 0) 
            let restaurant=  ( localStorage.getItem('restaurant') || 0) 
                  
            token =(((token)))
            userData =((JSON.parse(userData)))
            restaurant =((JSON.parse(restaurant)))
            console.log(token,userData,restaurant)
        })
        cy.saveLocalStorage();
      })

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });
}
/*  function loginFunction(){
    before(() => {
        cy.visit('https://app.restrox.co');
        // cy.contains('type').click({force:true}).first();
        
        cy.url()
        .should('include','/login');

        cy.get('[name=loginEmail]')
        .type('testblacktech2@gmail.com')
        .should('have.value',"testblacktech2@gmail.com")

        cy.get('[name=password]')
        .type('123456789')
        .should('have.value',"123456789")

        cy.xpath('//*[@id="root"]/div[1]/div/div/div/div/div/div/div/form/div[4]/button').click({force:true}).first()

    // Gone to Restrox
        cy.url().should('include','/Restrox').then(()=>{
            let token= (localStorage.getItem('token')||0)
            let userData= ( localStorage.getItem('userData') || 0) 
            let restaurant=  ( localStorage.getItem('restaurant') || 0) 
                  
            token =(((token)))
            userData =((JSON.parse(userData)))
            restaurant =((JSON.parse(restaurant)))
    
            console.log(token,userData,restaurant)
        })


        cy.saveLocalStorage();
       
      
      })

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

} */
  
describe(`Advanced_2.0 Login System `,()=>{
      
})
