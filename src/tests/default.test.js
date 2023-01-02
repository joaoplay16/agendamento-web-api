const chaiExclude = require('chai-exclude')
const expect = require('chai').use(chaiExclude).expect
const server = require('../../index')
const request = require('supertest')

describe('PAYMENT ROUTE', () => {
  it('Connection should return status 200', async () => {
    const response = await request(server).get('/process_payment')

    expect(response.status).to.be.equal(200)
  })
})