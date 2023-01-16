const customResponse ={}
        const customArray = []
        const metaData = Object.values(data['metaData'])// array
        // [
        //     {
        //         "name": "FACILITY_NO"
        //     },
        //     {
        //         "name": "TYPE_OF_FACILITY"
        //     }
        // ]


        const rows = Object.values(data['rows']) 

        // [
        //     "0000002008",
        //     "11",
        //     "5",
        //     "004008300821630242",
        //     "082163",
        //     null,
        //     null
        // ]
        // console.log(metaData)
        // res.send(metaData)
        // res.send(Object.keys(rows[0]))
        // const customResponse = []
        // for(i = 0; i < data.rows.length; i++){
        //    const metData =  data['metaData'][i]

        // }
        // for(i = 0; i < data.rows.length; i++){
        //     const metData =  data[''][i]
 
        //  }
        Object.values(meta).forEach(val => console.log(val));
        for (i=0; i< metaData.length; i++) {
            metaStrings = Object.values(metaData)[i]
            customArray.push(metaStrings)
            
        //     console.log(`${j}: ${metaData[j]}`);
          }
        for(i=0; i< rows.length; i++){
            
            rowsArrayed = Object.create(customResponse)
            
           
             rowsArrayed.responseMessage= Object.values(data['rows'][i]).toString()
            //  res.send(rowStrings)
            res.send(rowsArrayed)
            
    }