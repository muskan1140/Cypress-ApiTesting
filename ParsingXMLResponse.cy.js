// Install xml2 library
// npm install xml2js

//XML, or extensible markup language, is a common format for data representation and transmission in APIs

const xml2js=require('xml2js');
const parser = new xml2js.Parser({explicitArray: false});  //Parser here is used to pass the xml


describe('XML Parsing',() => {
    

    const xmlPayLoad= xmlPayLoad;
    let petid=null;



    it('creating new Pet',() => {
        cy.request({
            method:'Post',
            url:'https://petstore.swagger.io/v2/pet',
            body:xmlPayLoad,
            headers:{ 'Content-Type' : "application/xml",
                        'accept':'application/xml'
                    }
        }).then((response) => {
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result) => {
                petid=result.petid;
            })    
        
        });
    });



    it('Fetching Pet data-parsing xml response',() => {
        cy.request({
            method:'Get',
            url:'https://petstore.swagger.io/v2/pet/'+petid,
            headers:{ 'accept':'application/xml'}


        }).then((response) => {
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result) => {
                expect(result.Pet.name).to.equal("Jimmy")
                expect(result.Pet.id).to.equal(petid)
            })    
        
        });
    });
})