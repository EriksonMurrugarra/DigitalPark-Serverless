'use strict'

module.exports.retrieveCoursesCatalog = (event, context, callback) => {
  console.log(JSON.stringify(event));
  callback(null,  [{title: 'Aurelia Development'}]); 

}
