var AWS = require('aws-sdk')
var fs = require('fs')

AWS.config.update({
  accessKeyId:'###',secretAccessKey:'###'
})

fs.readFile('./aws.txt',function(err,data){
  if(err)
  return
    var base64data = new Buffer(data,'binary');
    var s3 = new AWS.S3()
    s3.putObject({
      Bucket:'ivangerard',
      Key:'ivan.txt',
      Body: base64data,
      ACL:'public-read'

    },function(response){
      console.log(response,'berhasil di upload');
    })

})
