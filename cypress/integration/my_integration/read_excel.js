let rowsLength;
describe('Data Driven Testing Using Excel FIle',()=>{
 before(()=>{
     cy.task('readXlsx',{file:'cypress/fixtures/excelData.xlsx',sheet:"Sheet1"}).then((rows)=>{
        rowsLength=rows.length;
        cy.writeFile("cypress/fixtures/xlsxData.json",{rows})
      })
      cy.visit('https://app.restrox.co/Restrox');
    })

    it('Data Driven:Register User',()=>{

      cy.fixture('xlsxData').then((data)=>{
         for(let i=0;i<rowsLength;i++){
            cy.get('[name=loginEmail]').type(data.rows[i].email);
            cy.get('[name=password]').type(data.rows[i].password);
            cy.xpath('//*[@id="root"]/div[1]/div/div/div/div/div/div/div/form/div[4]/button').click()

            cy.wait(1500)
            cy.get('body').then(($body)=>{
            if($body.text().includes('Dashboard')){

              console.log('Successfully infiltrated the Code yessssssssssssss')
              cy.xpath('//*[@id="overflow1"]/div/ul/li[3]/a/div[3]/img').click()
              cy.xpath('//*[@id="overflow1"]/div/ul/li[3]/div/div/div[2]/div/div/div[2]/button[3]/div/div/p').click()
              cy.wait(100)
              return
            }
            else{
              cy.get('[name=loginEmail]').clear();
              cy.get('[name=password]').clear();
            }
          })
          }
        })
      })
     })
   

     
// cy.fixture('xlsxData').then((data)=>{
//     for(let i=0; i<rowsLength;i++){
   
//     }
// })
