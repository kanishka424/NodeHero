const express =require ('express')

const app =express()

app.get('/',(request,response)=>{
    throw new Error('oops')

})


app.use((err,request,response,next)=>{//error handler middleware
    console.log(err)
    response.status(500).send('Something broke!')

})

app.listen(3000)


// const express =require ('express')

// const app =express()

// const port =3000

// app.get('/',(request,response)=>{
//     response.send('Hello from Express!')
// })

// app.listen(port,(err)=>{
//     if(err){
//         return console.log('something bad happened',err)
//     }

//     console.log(`server is listening on ${port}`)
// }
// )



// const http = require('http')
// const port =3000


// const requestHandler = (request,response)=>{
//     console.log(request.url)
//     response.end('Hello Node.js server')
// }


// const server = http.createServer(requestHandler)

// server.listen(port,(err)=>{
//     if(err){
//         return console.log('something bad happened',err)
//     }

//     console.log(`server is listening on ${port}`)
// })