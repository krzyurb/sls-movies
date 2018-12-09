import MoviesService from './movies.service';

export const moviesService = new MoviesService();

export const lambda = async () => {
  try {
    const message = await moviesService.randomMovie();

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ ...message }),
    };
  } catch (error) {
    return {
      statusCode: error.status || 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
