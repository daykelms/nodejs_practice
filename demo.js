var _ = require('lodash')

console.log(_.random(1,100))

var fs = require('fs')

fs.readdir('c:/',(err, data) =>{
  
    console.log(data)
})