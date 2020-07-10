import RESTAdapter from '@ember-data/adapter/rest';
import moviesStaticData from '../statics/movies/movies-static-data';

export default class MovieAdapter extends RESTAdapter {
  host = moviesStaticData.movieApiHost;
  pathForType(){
    return moviesStaticData.popularMoviePath + '?api_key=' + moviesStaticData.apiKey
  }
}
