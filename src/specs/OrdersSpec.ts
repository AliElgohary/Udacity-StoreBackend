import OrderModel from '../models/order';
import app from '../index';
import supertest from 'supertest';
import jwt from 'jsonwebtoken';

const order = new OrderModel();

const request = supertest(app);

const newUser = {
  username: 'first',
  email: 'last',
  password: '12345678',
};

const token = jwt.sign(newUser, process.env.TOKEN_SECRET as string);

describe('Testing Orders Methods', () => {
  it('A method that get all orders', () => {
    expect(order.getOrders).toBeDefined();
  });

  it('A method that get a specific order', () => {
    expect(order.UserOrder).toBeDefined();
  });

  it('A method that create a new order', () => {
    expect(order.CreateOrder).toBeDefined();
  });
  it('A method that delete an order', () => {
    expect(order.DeleteOrder).toBeDefined();
  });
});
describe('Testing orders Endpoints.', () => {
  it('GET /orders ', async () => {
    const response = await request.get('/orders');
    expect(response.status).toBe(200);
  });
  it('GET /order/:id without a token ', async () => {
    const response = await request.get('/api/orders/1');
    expect(response.status).toBe(401);
  });
  it('GET /api/orders/:id with a token ', async () => {
    const response = await request
      .get('/api/orders/1')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
  it('POST /api/orders without a token', async () => {
    const response = await request.post('/api/orders').send({
      status: 'test',
      userId: 1,
    });
    expect(response.status).toBe(401);
  });
  it('POST /api/orders with a token', async () => {
    const response = await request
      .post('/api/orders')
      .send({
        status: 'test',
        userId: 1,
      })
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
  it('DELETE /api/order', async () => {
    const response = await request.delete('/api/orders').send({
      id: 1,
    });
    expect(response.status).toBe(200);
  });
});