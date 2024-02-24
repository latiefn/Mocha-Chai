// your-test-file.js
import { expect } from 'chai';
import fetch from 'node-fetch';

export const performLoginTest = async (url, headers, testCase) => {
    const response = await fetch(`${url}/authentications`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(testCase.payload),
    });

    const output = await response.json();

    it(`Login Test - ${testCase.case.title}`, () => {
        expect(response.status).to.equal(testCase.case.status);
        if (testCase.case.status === 201) {
            expect(output.data).to.have.property('accessToken');
            expect(output.data).to.have.property('refreshToken');
            const userProperties = ['id', 'name', 'role', 'email', 'officeId', 'companyId', 'company_name'];
            userProperties.forEach(property => {
                expect(output.data.user).to.have.property(property);
            });
        } else {
            expect(output.message).to.equal(testCase.case.message);
        }
    });
};
