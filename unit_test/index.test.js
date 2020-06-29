import request from 'supertest';
import app from '../app';

describe('GET /', function() {
  it('return json response', function() {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type',/json/)
      .expect('{"text":"some json"}')
      //.expect('{"text":"some json"}').to.be.equal(2);
  })
})