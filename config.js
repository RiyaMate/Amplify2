import SES from "aws-sdk/clients/ses.js";
import S3 from "aws-sdk/clients/s3.js";
import NodeGeocoder from "node-geocoder";
export const DATABASE="mongodb+srv://riyamate123:jobriyamate@riyajob.mbvtk95.mongodb.net/";

export const  AWS_ACCESS_KEY_ID="AKIA47CRWJS4LX5NW3GW";

export const  SECRET_ACCESS_KEY="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";


export const  EMAIL_FROM="riyamate123@gmail.com";
export const REPLY_TO="riyamate123@gmail.com";

const awsConfig={
    accessKeyId:AWS_ACCESS_KEY_ID,
    secretAccessKey:SECRET_ACCESS_KEY,
    region:'us-east-1',
    apiversion:'2010-10-12',
}

export const AWSSES= new SES(awsConfig);
export const AWSS3= new S3(awsConfig);

export const GOOGLE_GEOCODER = NodeGeocoder({
    provider: "google",
    apiKey: "AIzaSyCqKnXBxGBtxTnqZdmLCNrgi0YGpglJr2k",
    formatter: null,
  });
   

export const JWT_SECRET= "IJFJDUFIGOFLIIHLL";

export const CLIENT_URL="http://localhost:3000"