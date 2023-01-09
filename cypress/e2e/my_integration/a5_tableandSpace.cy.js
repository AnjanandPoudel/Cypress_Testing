import { loginFunctionGlobal } from "./a2_LoginSystem.cy";
import { RowLen } from "./EXCEL.cy";

let rowsLength=1;
const PromiseResolver=async()=>{
    let rows=await RowLen()
    console.log(rows)
    rowsLength=rows.length
}



describe('Table and Space System',()=>{

    loginFunctionGlobal()
    it('Run PromiseResolver to calculate Excel rows length',()=>{
        PromiseResolver()
    })
    


    it('Inside Table,',( )=>{
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<1; i++){
                //table
                cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[8]/a').click();
                //search
                cy.wait(3000)
                cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div[2]/div/div/div[2]/div[1]/div[2]/div/div/div[2]/div').should('be.visible')

                //click option 
                cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div[2]/div/div/div[2]/div[1]/div[2]/div/div/div[2]/div/div[6]/div/div[2]/span').first().click();
                //edit
                cy.xpath('/html/body/div/div[1]/div[2]/div[3]/div[2]/div/div/div[2]/div[1]/div[2]/div/div/div[2]/div/div[6]/div/div[2]/div/a[1]').first().click();
                //name
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/input').clear();
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/input').type(data.rows[i].tableNameToUpdate)
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[1]/div/div/div[1]/div[2]').clear()
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[1]/div/div/div[1]/div[2]').type(data.rows[i].TableSpaceToUpdate+`{enter}`)
                //add capacity
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[2]/div[1]/span[1]').click();
                //open
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/div[3]/button[1]').click();
                //update
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[3]/span/button').click();   
            }
        })
    })

    it('Inside Table,',( )=>{
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<1; i++){
                cy.xpath('/html/body/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/ul/li[8]/a').click();
                //search
               
            }
        })
    })




})






