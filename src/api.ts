import { MovieData } from './types/MovieData';
import { ResponseError } from './types/ReponseError';
// http://www.omdbapi.com/?i=tt3896198&apikey=5b7f294b
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=5b7f294b';

export function getMovie(query: string): Promise<MovieData | ResponseError> {
  return fetch(`${API_URL}&t=${query}`)
    .then(res => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}
