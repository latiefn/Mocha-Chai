import { expect } from "chai";
import fetch from "node-fetch";
import { url } from "../url/url.js";
import { postRequestHeader } from "../header/requestHeader.js";
import { loginRequestBody, registrationRequestBody } from "../body/requestBody.js";
import { login } from "../body/auth.data.js";
import { performLoginTest } from '../url/performlogin.js';
let accessToken;
describe('API Test', () =>{
    it('Check the Endpoint (Success/200)', async () =>{
        const response = await fetch(`${url}`);

        const output = await response.json();

        //console.log('Response :', output);

        expect(response.status).to.equal(200);
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

    login.forEach(testCase => {
        it(`should perform login test - ${testCase.case.title}`, async () => {
            //await performLoginTest(url, postRequestHeader, testCase);
            const response = await fetch(`${url}/authentications`, {
                method: 'POST',
                headers: postRequestHeader,
                body: JSON.stringify(testCase.payload),
            });
            const output = await response.json();

            // Example assertions based on the expected values from the login array
            expect(response.status).to.equal(testCase.case.status);

            if (response.status === 201) {
                // Successful login assertions
                expect(output.status).to.equal('success');
                expect(output.message).to.equal(testCase.case.message);
                expect(output.data).to.have.property('accessToken');
                expect(output.data).to.have.property('refreshToken');
                expect(output.data.user).to.deep.equal(testCase.expectedUser);

                // save access Token
                accessToken = output.data.accessToken;

                // ... add more assertions for user properties if needed
            } else {
                // Failed login assertions
                expect(output.message).to.equal(testCase.case.message);
                // Add more specific assertions based on the failed case if needed
            }


        });
    });
});