/// <reference types = 'Cypress'/>

describe('api testing', () => {

    it("Approach 1- Hard coded Json object", () => {

        const requestBody = {
            tourist_name: "Mike",
            tourist_email: "john1256789@gmail.com",
            tourist_location: "Paris"
        }


        cy.request(
            {
                method: 'Post',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody
            }
        )

            //Store the response
            .then((response) => {
                expect(response.status).should('equal', 201)
                expect(response.body.tourist_name).should('equal', 'Mike')
                expect(response.body.tourist_email).to.eq("john1256789@gmail.com")
                expect(response.body.tourist_location).to.eq("Paris")
            }
        )
    })



    it("Approach 2- Dynamically Generating Json object", () => {

        const requestBody = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
            tourist_location: "Paris"
        }


        cy.request(
            {
                method: 'Post',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody
            }
        )

            //Store the response
            .then((response) => {
                expect(response.status).should('equal', 201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
            }
        )
    })
    


    it("Approach 3- Using Fixture File", () => {

        const requestBody = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
            tourist_location: "Paris"
        }


        cy.request(
            {
                method: 'Post',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody
            }
        )

            //Store the response
            .then((response) => {
                expect(response.status).should('equal', 201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

                //Validate the property in the response
                expect()
            }
        )
    })
})
