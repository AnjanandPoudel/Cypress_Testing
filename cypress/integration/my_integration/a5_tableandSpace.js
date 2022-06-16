import { loginFunctionGlobal } from "./a2_LoginSystem";
import { RowLen } from "./EXCEL";

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
                //staff
                cy.get(':nth-child(7) > .d-flex > .menu-item').click()
                //invite
                cy.get('.mt-md-0 > :nth-child(2)').click();
                //email
               for(let i=0; i<rowsLength;i++){
                cy.get(`:nth-child(${i+1}) > .col > .mt-2 > .form-control`).click();
                cy.get(`:nth-child(${i+1}) > .col > .mt-2 > .form-control`).type(data.rows[i].emailForStaffInvite);
                //role
                cy.get(`:nth-child(${i+1}) > .col > .mt-2 > .dropdown > .dropdown-menu > :nth-child(${i+2})`).click({force:true});
                //add new
                cy.get('.btn-icon').click();
               }
                //invite
                cy.get('.modal-footer > .btn-primary')
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/button').click()
                cy.wait(1000)
            }
        })
    })




})






