export default async event => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  body: JSON.stringify({
    message: 'Go Serverless v1.0! Your function executed successfully!',
    input: event,
  }),
});
