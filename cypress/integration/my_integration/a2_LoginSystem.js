export let rowsLength;
export const loginFunctionGlobal=()=>{
    before(() => {
        cy.task('readXlsx',{file:'cypress/fixtures/excelData.xlsx',sheet:"Sheet1"}).then((rows)=>{
          rowsLength=rows.length
          cy.writeFile("cypress/fixtures/xlsxData.json",{rows})
        })
        cy.visit('https://app.restrox.co');
        // cy.contains('type').click({force:true}).first();

        cy.url()
        .should('include','/login');

        cy.fixture('xlsxData').then((data)=>{
          cy.get('[name=loginEmail]')
          .type(data.rows[1].email)
  
          cy.get('[name=password]')
          .type(data.rows[1].password)
        })
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
  

describe('Completed Login System',()=>{
   
    loginFunctionGlobal()

      it('Dashboard',()=>{
        cy.contains('Dashboard').click({force:true}).first()
     cy.wait(300) })

      it('POS',()=>{
        cy.contains('POS').click({force:true}).first()
   cy.wait(300)   })      

      it('Activity',()=>{
        cy.contains('Activity').click({force:true}).first()
   cy.wait(300)   })      
      it('Menu',()=>{
        cy.contains('Menu').click({force:true}).first()
   cy.wait(300)   })      

      it('Inventory',()=>{
        cy.contains('Inventory').click({force:true}).first()
   cy.wait(300)   })      

      it('Account',()=>{
        cy.contains('Account').click({force:true}).first()
   cy.wait(300)   })      
      it('Staff',()=>{
      cy.contains('Staff').click({force:true}).first()
   cy.wait(300)   })      

      it('Table and Space',()=>{
        cy.contains('Table').click({force:true}).first()
   cy.wait(300)   })      

      it('Department',()=>{
        cy.contains('Department').click({force:true}).first()
   cy.wait(300)   })      
      it('Setting',()=>{
        cy.contains('Setting').click({force:true}).first()
   cy.wait(300)   })      

      it('Anuvab',()=>{
        cy.contains('Anuvab').click({force:true}).first()
   cy.wait(300)   })      

      it('Owner',()=>{
        cy.contains('Owner').click({force:true}).first()
   cy.wait(300)   })      
        



    
})






