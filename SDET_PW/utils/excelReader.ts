import * as xlsx from 'xlsx';
import * as path from 'path';

export const readExcelFile = (fileName: string, sheetName: string): any[]=>
{
    const filePath = path.join(process.cwd(),"test-data",fileName);
    try
    {
        const workBook = xlsx.readFile(filePath);
        const sheet = workBook.Sheets[sheetName];
        const data= xlsx.utils.sheet_to_json(sheet);
        return data;
    }
    catch(error)
    {
        console.error(`Error reading excel file : ${error}`);
        throw new Error(`Error reading excel file: ${error}`);
    }
}