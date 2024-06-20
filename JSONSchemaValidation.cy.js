// JSON Schema in cypress will provide a format for Json data 
// JSON Schema is a declarative language that provides a standardized way to describe and validate JSON data.


//--> What type of jata we have to store in the json that is decided by the schema

//Prequisite:- Install ajv

const Ajv= require('ajv');
const avj= new Ajv();


describe("Schema validation",() => {


    it("schema validation against response",() => {
        
        cy.request({
            method:'Get',
            url:'https://fakestoreapi.com/products'
        })
        .then((response) => {
            const schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "number"
                    },
                    "title": {
                      "type": "string"
                    },
                    "price": {
                      "type": "number"
                    },
                    "description": {
                      "type": "string"
                    },
                    "category": {
                      "type": "string"
                    },
                    "image": {
                      "type": "string"
                    },
                    "rating": {
                      "type": "object",
                      "properties": {
                        "rate": {
                          "type": "number"
                        },
                        "count": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "rate",
                        "count"
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "price",
                    "description",
                    "category",
                    "image",
                    "rating"
                  ]
                }
              }  // schema ends


              const validate=avj.compile(schema)
              const isvalid=validate(response.body)
              expect(isvalid).to.be.true;
        })
    })
})