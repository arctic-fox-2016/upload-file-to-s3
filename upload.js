var AWS = require('aws-sdk')
var fs = require('fs')

AWS.config.update({
  accessKeyId:'...', // Generate from S3
  secretAccessKey:'...' // Generate from S3
})

fs.readFile('./aws.txt',function(err,data){
  if(err)
  return
    var base64data = new Buffer(data,'binary');
    var s3 = new AWS.S3()
    s3.putObject({
      Bucket:'digachandra',
      Key:'test.txt',
      Body: base64data,
      ACL:'public-read'

    },function(response){
      console.log(response,'berhasil di upload');
    })

})
