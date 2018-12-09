import sinon from 'sinon';

import * as handler from '../src/handler';

describe('handler', () => {
  let service;

  beforeEach(() => {
    service = handler.moviesService;
  });

  afterEach(() => {
    sinon.restore();
  });

  test('it returns a movie', async () => {
    const movie = { text: 'Movie title' };
    sinon.stub(service, 'randomMovie').returns(movie);

    const result = await handler.lambda();

    const expected = {
      body: JSON.stringify({ ...movie }),
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
    };

    expect(result).toEqual(expected);
  });

  test('it responds with error if api fails', async () => {
    sinon.stub(service, 'randomMovie').throws({
      message: 'Error message',
      status: 401,
    });

    const result = await handler.lambda();

    const expected = {
      body: JSON.stringify({ error: 'Error message' }),
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 401,
    };

    expect(result).toEqual(expected);
  });

  test('it responds with error and 500 status by deafault if api fails', async () => {
    sinon.stub(service, 'randomMovie').throws({
      message: 'Error message',
    });

    const result = await handler.lambda();

    const expected = {
      body: JSON.stringify({ error: 'Error message' }),
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 500,
    };

    expect(result).toEqual(expected);
  });
});
