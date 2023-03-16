
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

export const handler = async(event) => {
    // TODO implement
    
    let method = event.httpMethod;
    let message = 'Hello from lambda ' + method;
    
    try {
        switch (event.httpMethod) {
            case 'GET':
                message = 'It is a get request';
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
