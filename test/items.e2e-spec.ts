import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

const newItem = {
  name: 'name1',
  category_id: '123',
};

describe('ArticlesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/items').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/items')
      .send(newItem)
      .expect(201);
  });
});
