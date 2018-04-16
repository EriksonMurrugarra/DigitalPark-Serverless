'use strict'
const AWS = require('aws-sdk');

const tableName = `${process.env.DPT_COURSES_CATALOG}`;
const ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

module.exports.handler = (event, context, callback) => {
  const query = {
    TableName: tableName
  };

  ddb.scan(query, (err, data) => {
    if (err) {
      console.log(err);
      return callback(err);
    }

    let catalog = data.Items.map(
      record => AWS.DynamoDB.Converter.unmarshall(record)
    );

    callback(null,  
      {
        "statusCode": 200,
        "body": JSON.stringify(catalog),
        "headers": {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }); 
}
