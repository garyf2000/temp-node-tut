//non-synchrized appoach

const {readFile, writeFile} = require ('fs')

// need callback  -- they are all in same callback stack
console.log('start')
readFile('./content/first.txt', 'utf8', (err,result) => {    //first callback
    if(err){
        console.log(err)
        return 
    }
    console.log(result)

    const first = result

    readFile ('./content/second.txt', 'utf8', (err, result) => {  //second ballback
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`,
        (err, result) => {    //the third callback
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task' )
        }) 
        
    })
})

// off the load, comes here right a way 
console.log('starting next task')

//not in good format, we will use promising to rewrite it later. 