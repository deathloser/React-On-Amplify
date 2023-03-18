
1. create a react app, create git repo through terminal, npm install before push

2. Create Lambda function to handle logic (use these headers to handle cors: https://codeburst.io/react-js-api-calls-to-aws-lambda-api-gateway-and-dealing-with-cors-89fb897eb04d)

headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods" : "OPTIONS,POST",
            "Access-Control-Allow-Credentials" : true,
            "Access-Control-Allow-Origin" : "*",
            "X-Requested-With" : "*"
        }

3. Create API Gateway with CRUD endpoints with proxies

4. deploy react app to amplify


-----LAMBDA CODE---
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/index.html
// https://medium.com/aws-lambda-serverless-developer-guide-with-hands/build-crud-restful-microservices-with-aws-lambda-api-gateway-dynamodb-with-aws-sdk-js-v3-408fa2f85048
// https://www.readysetcloud.io/blog/allen.helton/lessons-learned-from-switching-to-aws-sdk-v3/

import { DynamoDBClient, BatchExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
import { BatchWriteCommand } from "@aws-sdk/lib-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { GetItemCommand } from "@aws-sdk/client-dynamodb";



const client = new DynamoDBClient({ region: "us-east-1" });


export const handler = async(event) => {
    // TODO implement

    let method = event.httpMethod;
    let message = 'Hello from lambda ' + method;
    const dynamodb = new DynamoDBClient({ region: "us-east-1" });
    
    
    try {
        switch (event.httpMethod) {
            case 'GET':
                message = 'It is a get request';
                try {
                    let params = {
                        TableName: 'venues',
                        Key: marshall({ 'venueId': '1' })
                    }
                    const { Item } = await dynamodb.send(new GetItemCommand(params));
                    console.log(Item);
                    message = Item ? unmarshall(Item) : {};
                    // return (Item) ? unmarshall(Item) : {};
                    
                } catch (error) {
                    console.error(error);
                    throw error;
                }

                break;
            case 'POST':
                message = 'It is a post request'
                break;
        }
    }
    catch (error) {
        message = 'Something failed...';
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(message),
        headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods" : "OPTIONS,POST",
            "Access-Control-Allow-Credentials" : true,
            "Access-Control-Allow-Origin" : "*",
            "X-Requested-With" : "*"
    }
    };
