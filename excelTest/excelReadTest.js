// @breif xlsx 모듈추출
const xlsx = require( "xlsx" );


// @files 엑셀 파일을 가져온다.
const excelFile = xlsx.readFile( "./dramatis_personae.xlsx" );


// @breif 엑셀 파일의 첫번째 시트의 정보를 추출
const sheetName = excelFile.SheetNames[0];          // @details 첫번째 시트 정보 추출
const firstSheet = excelFile.Sheets[sheetName];       // @details 시트의 제목 추출
//console.log( firstSheet );

// @details 엑셀 파일의 첫번째 시트를 읽어온다.
const jsonData = xlsx.utils.sheet_to_json( firstSheet, { defval : "" } );


console.log( jsonData );