import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

const newArticle = {
  title: 'testettete',
  description: 'string',
  body: 'string',
  published: false,
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
    return request(app.getHttpServer()).get('/articles').expect(200);
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/articles')
      .send(newArticle)
      .expect(201);
  });
});
