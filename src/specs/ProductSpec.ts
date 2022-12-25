import ProuctModel from '../models/product';
import app from '../index';
import supertest from 'supertest';
import jwt from 'jsonwebtoken';
import config from '../configuration/config';

const product = new ProuctModel();

const request = supertest(app);

const newUser = {
  name: 'first',
  email: 'last',
  password: '12345678',
};

const token = jwt.sign(newUser, config.token as string);

describe('Testing Prodcuts Methods', () => {
  it('A method that get all products', () => {
    expect(product.getAllProducts).toBeDefined();
  });

  it('A method that get a specific product', () => {
    expect(product.getProductByID).toBeDefined();
  });

  it('A method that create a new product', () => {
    expect(product.CreateProduct).toBeDefined();
  });
  it('A method that delete a product', () => {
    expect(product.DeleteProduct).toBeDefined();
  });
});
describe('Testing products Endpoints.', () => {
  it('GET /api/products', async () => {
    const response = await request.get('/api/products');
    expect(response.status).toBe(200);
  });

  it('GET /api/product/:id ', async () => {
    const response = await request.get('/api/products/1');
    expect(response.status).toBe(200);
  });

  it('POST /api/products without a token', async () => {
    const response = await request.post('/api/products').send({
      name: 'test',
      price: 123,
    });
    expect(response.status).toBe(401);
  });
  it('POST /api/product with a token', async () => {
    const response = await request
      .post('/api/products')
      .send({
        name: 'test',
        price: 123,
      })
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
  it('DELETE /product without prodiving a token', async () => {
    const response = await request.delete('/api/products').send({
      id: 1,
    });
    expect(response.status).toBe(401);
  });

  it('DELETE /api/product with providing a token', async () => {
    const response = await request
      .delete('/api/products')
      .send({
        id: 1,
      })
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});