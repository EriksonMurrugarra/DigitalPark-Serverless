const querystring = require('querystring');

module.exports.handler = (event, context, callback) => {
    const submitted = querystring.parse(event.body);
    console.log(submitted);

    callback(null,  
        {
          "statusCode": 200,
          "body": JSON.stringify(submitted),
          "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      ); 
  
  }
  