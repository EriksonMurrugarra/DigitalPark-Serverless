'use strict'

const BLOGS = [
  {
    "id": 1,
    "title": "Por que debemos aprender Docker?",
    "content": "Contenedores",
    "tags": ["docker"],
  },
  {
    "id": 2,
    "title": "Microservices version 2.0",
    "content": "Contenedores",
    "tags": ["software"],
  }
];


module.exports.handler = (event, context, callback) => {
  console.log(JSON.stringify(event));
  callback(null,  
      {
        "statusCode": 200,
        "body": JSON.stringify(BLOGS),
        "headers": {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    ); 

}
