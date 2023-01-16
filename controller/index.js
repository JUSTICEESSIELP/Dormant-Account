const express = require('express');
const app = express();
const os = require('os')
const ip = require('ip');
const cors = require('cors')
const bodyParser = require('body-parser')

const OracleDB = require('oracledb');
const { response } = require('express');
const { json } = require('body-parser');

// const PROCEDURE_STRING = require('./string')

OracleDB.initOracleClient({libDir:'C:/instantclient_21_7'})

app.use(cors({origin:"*"}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

// const OracleDB = require('oracledb');
OracleDB.outFormat = OracleDB.OUT_FORMAT_OBJECT;


app.listen(7000, function(){
    console.log('localhost:7000')
})


app.post('/get-account-details', (req, res) => {
    const accountNumber = "'"+ req.body.accountNumber +"'";
    
    async function loginUser(){
  
 
      let con;
      
      
      try {
      
      con = await OracleDB.getConnection({
        user : "BANKOWNER",
        password: "pass1234",
        connectString : "192.168.1.60:9534/UNSGP"
      });


      const data = await con.execute(`SELECT ACCT_LINK, AV_BAL, BOOKBAL, OD_LIM, POST_AV_BAL, POST_BOOKBAL, POST_OD_LIM, SYSPOST_AV_BAL, UNCLEARED_BAL, ACCOUNT_NUMBER, ACCOUNT_DESCRP, POST_ACCT_DESCRP, BRANCH_CODE, BRDESC, STATUS_INDICATOR, STATUS_DESC, CURRENCY_CODE, GET_CURRDESC(CURRENCY_CODE) Currency, LFM_TEMP, MAX_DEPO_AMT, DEPO_ALLOW, MAX_WITHD_AMT, WITHD_ALLOW, PROD_CODE, UNAUTH_OD, CHQ_ALLOWED, CHQ_DEPO_ALLOW, TYPE_OF_ACCT,  LEGAL_FORM, CUST_NO, CASH_FLAG, CHQ_FLAG, ACR_CHG, ACR_PENAL, ACR_INT, VIEW_FLAG FROM BANKOWNER.VW_CASA_LEDGER WHERE ACCT_LINK = ${accountNumber}`)
      
    //   res.send(data.rows)
      let customResponse = []

      if (data.rows){
        for(i = 0; i < data.rows.length; i++){
            const ACCT_LINK = data.rows[i]["ACCT_LINK"]
            const AV_BAL = data.rows[i]['AV_BAL']
            const BOOKBAL = data.rows[i]['BOOKBAL']
            const OD_LIM = data.rows[i]['OD_LIM']
            const POST_AV_BAL = data.rows[i]['POST_AV_BAL']
            const POST_BOOKBAL = data.rows[i]['POST_BOOKBAL']
            const POST_OD_LIM = data.rows[i]['POST_OD_LIM']
            const SYSPOST_AV_BAL = data.rows[i]['SYSPOST_AV_BAL']
            const UNCLEARED_BAL = data.rows[i]['UNCLEARED_BAL']
            const ACCOUNT_NUMBER = data.rows[i]['ACCOUNT_NUMBER']
            const ACCOUNT_DESCRP = data.rows[i]['ACCOUNT_DESCRP']
            const POST_ACCT_DESCRP = data.rows[i]['POST_ACCT_DESC']
            const BRANCH_CODE = data.rows[i]['BRANCH_CODE']
            const BRDESC = data.rows[i]['BRDESC']
            const STATUS_INDICATOR = data.rows[i]['STATUS_INDICATOR']
            const STATUS_DESC = data.rows[i]['STATUS_DESC']
            const CURRENCY_CODE = data.rows[i]['CURRENCY_CODE']
            const CURRENCY = data.rows[i]['CURRENCY']
            const LFM_TEMP = data.rows[i]['LFM_TEMP']
            const MAX_DEPO_AMT = data.rows[i]['MAX_DEPO_AMT']
            const DEPO_ALLOW = data.rows[i]['DEPO_ALLOW']
            const MAX_WITHD_AMT = data.rows[i]['MAX_WITHD_AMT']
            const WITHD_ALLOW = data.rows[i]['WITHD_ALLOW']
            const PROD_CODE = data.rows[i]['PROD_CODE']
            const UNAUTH_OD = data.rows[i]['UNAUTH_OD']
            const CHQ_ALLOWED   = data.rows[i]['CHQ_ALLOWED']
            const CHQ_DEPO_ALLOW =  data.rows[i]['CHQ_DEPO_ALLOW']
            const TYPE_OF_ACCT = data.rows[i]['CHQ_DEPO_ALLOW']
            const LEGAL_FORM  = data.rows[i]['LEGAL_FORM']
            const CUST_NO = data.rows[i]['CUST_NO']
            const CASH_FLAG = data.rows[i]['CASH_FLAG']
            const CHQ_FLAG = data.rows[i]['CHQ_FLAG']
            const ACR_CHG = data.rows[i]['ACR_CHG']
            const ACR_PENAL = data.rows[i]['ACR_PENAL']
            const ACR_INT = data.rows[i]['ACR_INT']
            const VIEW_FLAG = data.rows[i]['VIEW_FLAG']
            

            customResponse.push({
                ACCT_LINK: ACCT_LINK,
                AV_BAL: AV_BAL,
                BOOKBAL: BOOKBAL,
                OD_LIM: OD_LIM,
                POST_AV_BAL: POST_AV_BAL,
                POST_BOOKBAL: POST_BOOKBAL,
                POST_OD_LIM: POST_OD_LIM,
                SYSPOST_AV_BAL: SYSPOST_AV_BAL,
                UNCLEARED_BAL: UNCLEARED_BAL,
                ACCOUNT_NUMBER: ACCOUNT_NUMBER,
                ACCOUNT_DESCRP: ACCOUNT_DESCRP,
                POST_ACCT_DESCRP: POST_ACCT_DESCRP,
                BRANCH_CODE: BRANCH_CODE,
                BRDESC: BRDESC,
                STATUS_INDICATOR: STATUS_INDICATOR,
                STATUS_DESC: STATUS_DESC,
                CURRENCY_CODE: CURRENCY_CODE,
                Currency: CURRENCY,
                LFM_TEMP: LFM_TEMP,
                MAX_DEPO_AMT: MAX_DEPO_AMT,
                DEPO_ALLOW: DEPO_ALLOW,
                MAX_WITHD_AMT: MAX_WITHD_AMT,
                WITHD_ALLOW: WITHD_ALLOW,
                PROD_CODE: PROD_CODE,
                UNAUTH_OD: UNAUTH_OD,
                CHQ_ALLOWED: CHQ_ALLOWED,
                CHQ_DEPO_ALLOW: CHQ_DEPO_ALLOW,
                TYPE_OF_ACCT: TYPE_OF_ACCT,
                LEGAL_FORM: LEGAL_FORM,
                CUST_NO: CUST_NO,
                CASH_FLAG: CASH_FLAG,
                CHQ_FLAG: CHQ_FLAG,
                ACR_CHG: ACR_CHG,
                ACR_PENAL: ACR_PENAL,
                ACR_INT: ACR_INT,
                VIEW_FLAG: VIEW_FLAG
            }

            )
        
        }
        console.log('custom', customResponse)
        res.send(customResponse)
    
    
    }else{

      }
    }catch(err){
        console.log('logged error')
      }}

      loginUser()
    })

app.post('/get_facility_details', (req, res)=>{
    const facilityNumber = "'"+req.body.facilityNumber+"'";
   
    
    const getFacility  = async()  =>{
        let con;
    
      
        try {
        
        con = await OracleDB.getConnection({
          user : "BANKOWNER",
          password: "pass1234",
          connectString : "192.168.1.60:9534/UNSGP"
        });
        if(con){
            console.log('connection successful')
        }else{
             console.error('hi');
        }

        const data = await con.execute(`SELECT * FROM FACILITY WHERE FACILITY_NO =${facilityNumber}`)
        
        if (data.rows){
            const customArray = []
            var arr0 = ''
            // const metaData = data['metaData']
            // res.send(metaData)
            const rowsRow = Object.values(data['rows'][0])
            // res.send(rows)
            if(data.rows){
                for(i = 0; i < data.rows.length; i++){
                    for(j =0 ; j< data.metaData.length; j++){
                        customArray.push('"' + [data.metaData[j].name] + '" :"' + rowsRow[j] + '"');
                    
                  
                        // arr0 = '"' + data.metaData[j].name+ ":"+rowsRow[i] +'"'
                   
                    }
         
                }
    
            }
            // res.send(customArray)

            res.send(JSON.parse('{'+customArray + '}'))
            // console.log(JSON.parse(`{${customArray}}`))

        }

        

        
             
  


        //     // customResponse.responseMessage= customArray;
        // }

            // for(j=0; j<metaData.length;j++){
            //    console.log( Object.values(data['metaData'][j]))
               
            // }
        
        
 


    }catch(err){
        console.log(err)

    }
}
getFacility()
})


