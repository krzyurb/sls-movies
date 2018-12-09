import sinon from 'sinon';
import axios from 'axios';

import Service from '../src/movies.service';

describe('Cats handler', () => {
  let subject;

  beforeEach(() => {
    subject = new Service();
  });

  afterEach(() => sinon.restore());

  describe('randomMovie', () => {
    test('responds with random movie', async () => {
      const exampleMovie = {
        title: 'title',
        overview: 'movie overview',
        poster_path: '/qwerty.jpg',
        vote_average: '1.23',
        original_title: 'oryginal',
        original_language: 'pl',
        release_date: '1981-10-10',
      };

      sinon.stub(axios, 'get').returns({
        data: {
          total_pages: 10,
          results: [exampleMovie],
        },
      });

      const result = await subject.randomMovie();

      const expected = {
        attachments: [{
          fields: [
            { short: true, title: 'Vote average', value: '1.23' },
            { short: true, title: 'Original title', value: 'oryginal (pl)' },
            { short: true, title: 'Release date', value: '1981-10-10' },
          ],
          pretext: "🎥 *Your '80 action movie for today!*",
          text: 'movie overview',
          thumb_url: 'http://image.tmdb.org/t/p/w780//qwerty.jpg',
          title: 'title',
        }],
      };

      expect(result).toEqual(expected);
    });
  });
});
