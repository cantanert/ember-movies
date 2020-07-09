import Service from '@ember/service';
import fetch from 'fetch';


export default class SearchMovieService extends Service {

  searchMovieByKeyword= async (keyword) => {
    var moviesResponse = await fetch('https://api.themoviedb.org/3/search/movie?api_key=70535229d2cd7b8e7129bbdd05eac118&language=en-US&query=' + keyword + '&page=1&include_adult=false')
      .then((response) => response.json())
      .then(data => data.results);
    console.log(moviesResponse);
    return moviesResponse;
  }

}
