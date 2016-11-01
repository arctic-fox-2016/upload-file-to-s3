var AWS = require('aws-sdk')
var fs = require('fs')

AWS.config.update({accessKeyId: 'GHIJKLOWERQDM9KM1BNL', secretAccessKey: 'db8TY8B0ISgdCMFMERAxZDNDW23HKLsOPSnbc29j'})


fs.readFile('test.txt', function (err,data) {
  if(err){
    return
  }
  var base64data = new Buffer(data,'binary')
  var s3 = new AWS.S3()
  s3.putObject({
    Bucket: 'hacktiv8',
    Key: 'berhasil.txt',
    Body: base64data,
    ACL: 'public-read'
  }, function (response) {
    console.log(response,' : succes');
  })
})
