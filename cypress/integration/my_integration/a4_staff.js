import { loginFunctionGlobal } from "./a2_LoginSystem";
import { RowLen } from "./EXCEL";

let rowsLength=1;
const PromiseResolver=async()=>{
    let rows=await RowLen()
    console.log(rows)
    rowsLength=rows.length
}



describe('Staff System',()=>{

    loginFunctionGlobal()
    it('Run PromiseResolver to calculate Excel rows length',()=>{
        PromiseResolver()
    })
    


    it('Inside STAFF, Invite staff',( )=>{
        
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
                cy.get('.btn-icon').click()
               }
                //invite
                cy.get('.modal-footer > .btn-primary')
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/button').click()
                cy.wait(1000)
                
            }
        })
    })

    it('Staff == Create STaff Profile,',( )=>{
        
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength; i++){
                //staff
                cy.xpath('/html/body/div/div[1]/div[2]/div/div[3]/div[1]/div/div[2]/ul/li[7]/a').click()
                //create staff profile
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div/div/div[1]/div[1]/div/div/div/button[2]').click();
                //email
                cy.get(`#full-name`).type(data.rows[i].staffFullName);
                cy.get(`:nth-child(1) > #country`).type(data.rows[i].staffEmail);
                cy.get(`:nth-child(2) > #country`).type(data.rows[i].staffAddress);
                cy.get(`#contact`).type(data.rows[i].staffContact);

                //select role
                cy.get(`:nth-child(1) > .react-select > .select__control > .select__value-container > .select__input-container`).type(data.rows[i].staffRoles+`{enter}`);
                // select position
                cy.get(`:nth-child(2) > .react-select > .select__control > .select__value-container > .select__input-container`).type(data.rows[i].staffRoles+`{enter}`);
               
                //invite
                cy.get('.pb-2 > div > .me-1').click()
                //close
                cy.xpath('/html/body/div[2]/div/div[1]/div/div/div[1]/button').click()
                cy.wait(1000)
                
            }
        })
    })


    it('Staff == Search , Edit  Staff',( )=>{
        
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength; i++){
                //click staff
                cy.get(':nth-child(7) > .d-flex > .menu-item').click()
                //staff search
                cy.get(`#search-invoice`).clear()
                cy.get(`#search-invoice`).type(data.rows[i].staffFullName)

                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div/div/div[1]/div[2]/div/div/div/div/div[2]/div[1]').should('be.visible')
                //click options
                cy.xpath(`/html/body/div/div[1]/div[3]/div[3]/div/div/div[1]/div[2]/div/div/div/div/div[2]/div[1]/div[6]/div/div[1]`).click()
                //click edit
                cy.xpath(`/html/body/div/div[1]/div[3]/div[3]/div/div/div[1]/div[2]/div/div/div/div/div[2]/div[1]/div[6]/div/div[2]/button[1]`).click()

                
                cy.get(`#full-name`).clear()
                cy.get(`#country`).clear()
                cy.get(`#contact`).clear()


                cy.get(`#full-name`).type(data.rows[i].staffFullName);
                cy.get(`#country`).type(data.rows[i].staffAddress);
                cy.get(`#contact`).type(data.rows[i].staffContact);

                cy.get(`:nth-child(8) > .select__control > .select__value-container > .select__input-container`).type(`{backspace}`);
                cy.get(`:nth-child(8) > .select__control > .select__value-container > .select__input-container`).type(data.rows[i].staffRoles+`{enter}`);
                cy.get(`:nth-child(10) > .select__control > .select__value-container > .select__input-container`).type(data.rows[i].staffPosition+`{enter}`);
                cy.get(`:nth-child(12) > .select__control > .select__value-container > .select__input-container`).type(data.rows[i].staffDepartment+`{enter}`);
                //update
                cy.get(`span > .style_mgt10__uWtZB`).click();
                //sure
                // cy.xpath(`/html/body/div[3]/div/div[6]/button[1]`).click()
                //x
                cy.get(`.mb-3 > .cursor-pointer`).click()

            }
        })
    })


    it('Staff == Search , Delete Staff',( )=>{
        
        cy.fixture('xlsxData').then((data)=>{
            for(let i=0; i<rowsLength; i++){
                  //now for delete
                //staff
                cy.get(':nth-child(7) > .d-flex > .menu-item').click()
                //staff search
                cy.get(`#search-invoice`).clear()
                cy.get(`#search-invoice`).type(data.rows[i].staffFullName)

                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div/div/div[1]/div[2]/div/div/div/div/div[2]/div[1]').should('be.visible')
                //click options
                cy.xpath(`/html/body/div/div[1]/div[3]/div[3]/div/div/div[1]/div[2]/div/div/div/div/div[2]/div[1]/div[6]/div/div[1]`).click()
                
                delete
                cy.xpath('/html/body/div/div[1]/div[3]/div[3]/div/div/div[1]/div[2]/div/div/div/div/div[2]/div[1]/div[6]/div/div[2]/button[2]').click()
                cy.get('.swal2-confirm').click()
                cy.wait(300)
              

            }
        })
    })




})






