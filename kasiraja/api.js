import { expect } from "chai";
import fetch from "node-fetch";
import { url } from "../url/url.js";
import { postRequestHeader } from "../header/requestHeader.js";
import { registrationRequestBody } from "../body/requestBody.js";

describe('API Test', () =>{
    it('Return success', async () =>{
        const response = await fetch(`${url}`);

        const output = await response.json();

        //console.log('Response :', output);

        expect(response.status).to.equal(200);
        expect(output.data).to.have.property('status');
        expect(output.data).to.have.property('name');
        expect(output.data).to.have.property('version');
    });

    it('Return fail', async () =>{
        const response = await fetch(`${url}/1`);
        const output = await response.json();

        //console.log('Response: ', output);
        expect(response.status).to.equal(404);
    });


    it('Should successfully register user with POST request', async () => {
        const response = await fetch(`${url}/registration`, {
            method: 'POST',
            headers: postRequestHeader,
            body: JSON.stringify(registrationRequestBody),
        });

        //log the request and url
        // console.log('Registration URL:', registrationUrl);
        //     console.log('Registration Request:', {
        //         method: 'POST',
        //         headers: postRequestHeader,
        //         body: requestBody,
        // });

        const output = await response.json();

        //console.log('Response :', output);

        // Add assertions for the registration response
        expect(response.status).to.equal(201);
        expect(output).to.have.property('status');
        expect(output).to.have.property('message');
        expect(output.data).to.have.property('name');
        expect(output.data).to.have.property('email')

    });

});