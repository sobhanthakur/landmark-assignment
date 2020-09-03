import * as AWSService from "aws-sdk";
export const Upload = (file) => {
  AWSService.config.update({
    region: process.env.REACT_APP_REGION,
    credentials: new AWSService.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_POOL_ID,
    }),
  });

  const s3 = new AWSService.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: process.env.REACT_APP_BUCKET_NAME },
  });
  return new Promise((resolve, reject) => {
    s3.upload({
        Key: file.name,
        Bucket: process.env.REACT_APP_BUCKET_NAME,
        Body: file,
        ContentType: "image/jpeg",
        ACL: "public-read",
      },(err,data) => {
          if(!err) {
              console.log(data)
              resolve(data)
          } else {
            reject(err)
          }
      });
  })
};
