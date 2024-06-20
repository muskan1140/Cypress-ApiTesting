describe("Parsing JSON Response", () => {


    it("Parsing simple JSON response",() => {

        cy.request({
            method:'Get',
            url:'https://fakestoreapi.com/products',
            
        })
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body[0].id).to.equal(1);
            expect(response.body[1].title).to.equal("Mens Casual Premium Slim Fit T-Shirts ");
            expect(response.body[4].price).to.equal(695);
            expect(response.body[3].category).to.equal("men's clothing");
            expect(response.body[2].rating.rate).to.equal(4.7);
            expect(response.body[8].rating.count).to.equal(203);
        })
    })



    it.only("Parsing simple JSON response",() => {
        
        let totalprice = 0;

        cy.request({
            method:'Get',
            url:'https://fakestoreapi.com/products',
            qs: {limit:20}
            
        })
        .then((response) => {
            expect(response.status).to.equal(200);

            response.body.forEach(element => {
                totalprice=totalprice+element.price;
            });
            expect (totalprice).to.equal(3240.9199999999987);   //limit = 20
        })
       
    })
})