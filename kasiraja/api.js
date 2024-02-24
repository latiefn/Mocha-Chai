import { expect } from "chai";
import fetch from "node-fetch";
import { url } from "../url/url.js";
import { postRequestHeader } from "../header/requestHeader.js";
import { registrationRequestBody } from "../body/requestBody.js";

describe('API Test', () =>{
    it('Check the Endpoint (Success/200)', async () =>{
        const response = await fetch(`${url}`);

        const output = await response.json();

        //console.log('Response :', output);

        expect(response.status).to.equal(201);
        expect(output.data).to.have.property('status');
        expect(output.data).to.have.property('name');
        expect(output.data).to.have.property('version');
    });

    it('Check the Endpoint (Fail/404)', async () =>{
        const response = await fetch(`${url}/1`);
        const output = await response.json();

        //console.log('Response: ', output);
        expect(response.status).to.equal(404);
    });


    it('Register New Member (Post)', async () => {
        const response = await fetch(`${url}/registration`, {
            method: 'POST',
            headers: postRequestHeader,
            body: JSON.stringify(registrationRequestBody),
        });

        const output = await response.json();

        //console.log('Response :', output);
        expect(response.status).to.equal(201);
        expect(output).to.have.property('status');
        expect(output).to.have.property('message');
        expect(output.data).to.have.property('name');
        expect(output.data).to.have.property('email')

    });

});