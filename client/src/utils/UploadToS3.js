import * as AWSService from "aws-sdk";
import * as Constants from "../constants/Constants";
export const Upload = (file) => {
  AWSService.config.update({
    region: Constants.REGION,
    credentials: new AWSService.CognitoIdentityCredentials({
      IdentityPoolId: Constants.POOL_ID,
    }),
  });

  const s3 = new AWSService.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: Constants.BUCKET_NAME },
  });
  return new Promise((resolve, reject) => {
    s3.upload({
        Key: file.name,
        Bucket: Constants.BUCKET_NAME,
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
