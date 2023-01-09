let rowskoLength=0;

export const  ReadExcel=async()=>{
    let rowsLength= await cy.task('readXlsx',{file:'cypress/fixtures/excelData.xlsx',sheet:"Sheet1"})
    .then((rows)=>{
        cy.writeFile("cypress/fixtures/xlsxData.json",{rows});
        
      })
    return rowsLength;

}

export const  RowLen=async()=>{
    let readExcel=await ReadExcel()
    // console.log(readExcel)
    return readExcel;
}
