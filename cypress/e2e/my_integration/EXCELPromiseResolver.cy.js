import { RowLen } from "./EXCEL.cy";

let rowskoLength=0;
const PromiseResolver=async()=>{
    let rows=await RowLen()
    console.log(rows)
    rowskoLength=rows.length
}

describe('Excel System Running',async()=>{
    it('Resolving Excel Promise',()=>{
        PromiseResolver()
    })

    it('Checks if Excel file is ready or rows are greater than 1',()=>{
            console.log(rowskoLength)
            if(!(rowskoLength>1)){
                expect(true).equals(false)
            }
        })

})

// export const ExcelSystem=()=>{
//     it('',()=>{
//         PromiseResolver()
//     })

//     it('Checks if Excel file is ready or greater than 1',()=>{
//     // For POS, AddOrder then Search Tables and AddDishes/Order and Checkout
//         console.log(rowskoLength)
//         if(!rowskoLength>1){
//             expect(true).equals(false)
//         }
//     })

// }


