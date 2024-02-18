// api.test.js

import { expect } from 'chai';
import fetch from 'node-fetch';
import { apiUrl } from '../config/config.js';

describe('API Testing', () => {
  it('should return a successful response for post with id 1', async () => {
    const response = await fetch(`${apiUrl}/posts/1`);
    const data = await response.json();

    // Log or print the API response
    //console.log('API Response:', data);

    expect(response.status).to.equal(200);
    expect(data).to.have.property('userId');
    expect(data).to.have.property('id');
    expect(data).to.have.property('title');
    expect(data).to.have.property('body');
  });

  it('should return a successful response for user with id 1', async () => {
    const response = await fetch(`${apiUrl}/users/1`);
    const data = await response.json();

        // Log or print the API response
        //console.log('API Response:', data);

    expect(response.status).to.equal(200);
    expect(data).to.have.property('id');
    expect(data).to.have.property('name');
    expect(data).to.have.property('username');
    expect(data).to.have.property('email');
  });

  it('should handle a non-existent post', async () => {
    const response = await fetch(`${apiUrl}/posts/999`);

    expect(response.status).to.equal(404);
  });
});
