'use strict'

const CATALOG = [
  {
    "id": 1,
    "title": "Docker & Kubernetes",
    "description": "Contenedores",
    "courses": [
      {
        "id": 11,
        "title": "Introduccion a Docker",
        "tags": "DOCKER",
        "image": "./images/covers/docker.png"
      },
      {
        "id": 12,
        "title": "Desarrollando con Docker",
        "tags": "DOCKER",
        "image": "./images/covers/docker.png"
      },
      {
        "id": 13,
        "title": "Deployando a Kubernetes",
        "tags": "DOCKER - KUBERNETES",
        "image": "./images/covers/docker.png"
      },
      {
        "id": 14,
        "title": "Usando Docker Compose",
        "tags": "DOCKER - COMPOSE",
        "image": "./images/covers/docker.png"
      }
    ]
  },
  {
    "id": 2,
    "title": "DevOps",
    "description": "DevOps en la practica",
    "courses": [
      {
        "id": 21,
        "title": "Introduccion a Jenkins",
        "tags": "DEVOPS - JENKINS",
        "image": "./images/covers/docker.png"
      },
      {
        "id": 22,
        "title": "Delivery Pipelines",
        "tags": "DEVOPS - JENKINS",
        "image": "./images/covers/docker.png"
      },
      {
        "id": 23,
        "title": "Pipeline as Code con Jenkins",
        "tags": "DEVOPS - JENKINS",
        "image": "./images/covers/docker.png"
      },
      {
        "id": 24,
        "title": "Integracion Continua",
        "tags": "DEVOPS - JENKINS",
        "image": "./images/covers/docker.png"
      }
    ]
  }];


module.exports.handler = (event, context, callback) => {
  console.log(JSON.stringify(event));
  callback(null,  
      {
        "statusCode": 200,
        "body": JSON.stringify(CATALOG),
        "headers": {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    ); 

}
