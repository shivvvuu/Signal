/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

const tableName = process.env.USERTABLE;


exports.handler = async (event, context) => {
  // event event.request.userAttributes.(sub, email)
  // insert code to be executed by your lambda trigger

  if(!event?.request?.userAttributes?.sub){
    console.log("No sub provided");
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();


  const userItem ={
    __typename:{ S: 'User'},
    _lastChangedAt:{ N: timestamp.toString()} ,
    _version:{ N: "1"},
    createdAt:{ S: now.toISOString()},
    updatedAt:{S :now.toISOString()},
    id:{S : event.request.userAttributes.sub} ,
    name: {S : event.request.userAttributes.email},
    
  }

  const params = {
    Item: userItem,
    TableName: tableName,

  }
  // save a new user to DynamoDB
  try{

    await ddb.putItem(params).promise();
    console.log("sussces ::::::bang gya")
  }catch(e){
    console.log(e);
    console.log("yaha error hua h ::");
  }
  
  return event
};











