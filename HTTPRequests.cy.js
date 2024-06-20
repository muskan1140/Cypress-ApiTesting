/// <reference types = "Cypress"/>

describe("HTTP Requests", () => {

    it("GET Call", () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);
    })


    // In case of post call there are 3 parameters request type, Url and body
    it("POST Call", () => {
        cy.request({
            method: 'Post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: "Test Post",
                body: "This is post call",
                userID: 1
            }
        })
        .its('status')
        .should('equal', 201)
    })



    it("PUT Call", () => {
        cy.request({
            method: 'Put',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: "Test Post-Updated",
                body: "This is put call",
                userID: 1,
                id: 1
            }
        })
        .its('status')
        .should('equal', 200)
    })



    it("DELETE Call", () => {
        cy.request({
            method: 'Delete',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status')
        .should('equal', 200)
    })

})

