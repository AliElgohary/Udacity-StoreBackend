import  UsersModel  from '../models/user';
import app from '../index';
import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import config from '../configuration/config';

const user = new UsersModel();

const request = supertest(app);

const newUser = {
  username: 'first',
  email: 'email',
  password: '12345678',
};

const token = jwt.sign(newUser, config.token as string);

describe('Testing User Methods', () => {
  it('A method that get all users', () => {
    expect(user.GetAllUsers).toBeDefined();
  });

  it('A method that get a specific user by ID', () => {
    expect(user.GetUserById).toBeDefined();
  });

  it('A method that create a new user', () => {
    expect(user.CreateUser).toBeDefined();
  });
  it('A method that delete a user', () => {
    expect(user.DeleteUser).toBeDefined();
  });
});
describe('Testing Users Endpoints.', () => {
  it('GET /users without prodiving a token', async () => {
    const response = await request.get('/users');
    expect(response.status).toBe(401);
  });

  it('GET /users with providing a token', async () => {
    const response = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('GET /user/:id without prodiving a token', async () => {
    const response = await request.get('/users/1');
    expect(response.status).toBe(401);
  });

  it('GET /user/:id with providing a token', async () => {
    const response = await request
      .get('/users/1')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('POST /user', async () => {
    const response = await request.post('/users').send({
      username: 'name',
      email: 'email',
      password: '12345678',
    });
    expect(response.status).toBe(200);
  });

  it('PUT /user without prodiving a token', async () => {
    const response = await request.put('/users').send({
      id: 1,
      username: 'update',
      email: 'update',
      password: 'update',
    });
    expect(response.status).toBe(401);
  });

  it('PUT /user with providing a token', async () => {
    const response = await request
      .put('/user')
      .send({
        id: 1,
        username: 'update',
        email: 'update',
        password: 'update',
      })
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
  it('DELETE /user without prodiving a token', async () => {
    const response = await request.delete('/users').send({
      id: 1,
    });
    expect(response.status).toBe(401);
  });
});