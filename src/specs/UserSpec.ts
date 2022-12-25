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
  it('GET /api/users without prodiving a token', async () => {
    const response = await request.get('/api/users');
    expect(response.status).toBe(401);
  });

  it('GET /api/users with providing a token', async () => {
    const response = await request
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('GET /api/user/:id without prodiving a token', async () => {
    const response = await request.get('/api/users/1');
    expect(response.status).toBe(401);
  });

  it('GET /api/user/:id with providing a token', async () => {
    const response = await request
      .get('/api/users/1')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('POST /api/user', async () => {
    const response = await request.post('/api/users').send({
      username: 'name',
      email: 'email',
      password: '12345678',
    });
    expect(response.status).toBe(200);
  });

  it('DELETE /api/user without prodiving a token', async () => {
    const response = await request.delete('/api/users').send({
      id: 1,
    });
    expect(response.status).toBe(401);
  });
});