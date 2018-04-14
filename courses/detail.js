'use strict'

const COURSE = {
    "id": 11,
    "title": "Introduccion a Docker",
    "description": "En este curso aprenderas a utilizar docker y los conceptos basicos, entraremos en detalle y te aseguramos que seras un experto en poco tiempo.",
    "tags": "DOCKER",
    "image": "./images/covers/docker.png",
    "content": {
      "1": {
        "title": "Fundamentos Basicos",
        "detail": "Basico",
        "videos": [
            {
                "order": "1",
                "title": "Introduccion",
                "detail": "Detalle de este video",
                "videoURL": "http://someplace"
            },
            {
                "order": "2",
                "title": "Dockerfile",
                "detail": "Los dockerfile permiten",
                "videoURL": "http://someplace"
            }
        ]
      }
    }
  };


module.exports.handler = (event, context, callback) => {
  console.log(JSON.stringify(event));
  callback(null,  
      {
        "statusCode": 200,
        "body": JSON.stringify(COURSE),
        "headers": {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    ); 

}
