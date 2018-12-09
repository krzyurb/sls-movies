/* eslint-disable class-methods-use-this */

import axios from 'axios';

const { API_KEY } = process.env;

export default class MoviesService {
  async randomMovie() {
    const firstPageData = await this.apiRequest();
    const randomPageNumber = Math.round(Math.random() * (firstPageData.total_pages - 1) + 1);

    const data = await this.apiRequest(randomPageNumber);
    const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

    return this.prepareMessage(randomMovie);
  }

  prepareMessage(movie) {
    return {
      attachments: [{
        pretext: "🎥 *Your '80 action movie for today!*",
        title: movie.title,
        text: movie.overview,
        thumb_url: `http://image.tmdb.org/t/p/w780/${movie.poster_path}`,
        fields: [
          {
            title: 'Vote average',
            value: movie.vote_average,
            short: true,
          },
          {
            title: 'Original title',
            value: `${movie.original_title} (${movie.original_language})`,
            short: true,
          },
          {
            title: 'Release date',
            value: movie.release_date,
            short: true,
          },
        ],
      }],
    };
  }

  async apiRequest(page = 1) {
    const { data } = await axios.get('http://api.themoviedb.org/3/discover/movie', {
      params: {
        'primary_release_date.gte': '1980-01-01',
        'primary_release_date.lte': '1989-12-31',
        api_key: API_KEY,
        with_genres: 28,
        page,
      },
    });

    return data;
  }
}
