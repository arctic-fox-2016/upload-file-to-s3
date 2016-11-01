var AWS = require('aws-sdk')
var fs = require('fs')

AWS.config.update(
  {
    accessKeyId: 'AKIAI43FMV2JG7B5E25A',
    secretAccessKey: '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'
  })
 fs.readFile('test.txt',function(err,data){
   if(err)return
   var base64data = new Buffer(data,'binary')

   var s3=new AWS.S3()
   s3.putObject({
     Bucket: 'ariadiprana',
     Key: 'berhasil.txt',
     Body: base64data,
     ACL: 'public-read'
   }, function(response){
     console.log(response,'berhasil di upload');
   })

 })
