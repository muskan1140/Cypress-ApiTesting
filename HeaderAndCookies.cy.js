// Headers are key-value pairs, where the key is a string that describes the type of information being provided, 
// and the value is the actual data being provided
/// <reference types = "Cypress"/>


describe('API Testing', () => {


    let authToken = null;


    before("Creating access token", () => {
        cy.request({
            method: 'Post',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: "ABC Test",
                clientEmail: Math.random().toString(5).substring(2) + "@gmail.com"
            }
        }).then((response) => {
            authToken = response.body.accessToken;
        });
    });



    before("Creating new order", () => {
        cy.request({
            method: 'Post',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + authToken
            },
            body: {
                bookId: 1,
                customerName: "xyzabcde"
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true);
        });
    });


    it("Fetching the orders", () => {
        cy.request({
            method:'Get',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + authToken
            },
            cookies:{
                "cookieName":"mycookie"
            }
        }).then((response) => {                      //Fetching the order details
            expect(response.status).to.eq(200);
            expect(response.body).has.length(1);
        })
    })
})









